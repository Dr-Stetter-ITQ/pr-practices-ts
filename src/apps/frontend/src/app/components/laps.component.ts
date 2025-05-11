import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { LapsSerivce } from '../services/laps.service';

@Component({
  selector: 'app-laps',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './laps.component.html',
  styleUrls: ['./car.component.scss']
})
export class LapsComponentes implements OnInit {
    firstTime = true;
    laps_data: any = [];

    conductores = [
        { driver_number: 1, broadcast_name: "M VERSTAPPEN" },
        { driver_number: 2, broadcast_name: "L SARGEANT" },
        { driver_number: 4, broadcast_name: "L NORRIS" },
        { driver_number: 10, broadcast_name: "P GASLY" },
        { driver_number: 11, broadcast_name: "S PEREZ" },
        { driver_number: 14, broadcast_name: "F ALONSO" },
        { driver_number: 16, broadcast_name: "C LECLERC" },
        { driver_number: 20, broadcast_name: "K MAGNUSSEN" },
        { driver_number: 21, broadcast_name: "N DE VRIES" }
    ];
    form: any;

    constructor(private fb: FormBuilder, private lS: LapsSerivce) {}

    ngOnInit(): void {
        this.form = this.createForm();
    }
    

    private createForm() {
        return this.fb.group({
            driver_number: ['', Validators.required],
            v: ['', Validators.required],
        });
    }

    getCar() {
        if (this.form.invalid) return;

        const { driver_number, v } = this.form.value;

        this.lS.getLaps(driver_number, v).subscribe({
            next: (data) => this.laps_data = data,
            error: (err) => console.error('Error fetching car data:', err),
        });
        
        this.firstTime = false;
    }

    IMPRIMEDATA(data: any): string {
        return `
            Lap #${data.lap_number} - Driver ${data.driver_number}
            Duration: ${data.lap_duration.toFixed(3)}s
            Sectors: [${data.duration_sector_1.toFixed(3)}, ${data.duration_sector_2.toFixed(3)}, ${data.duration_sector_3.toFixed(3)}]
            Top Speeds: i1=${data.i1_speed} km/h, i2=${data.i2_speed} km/h, st=${data.st_speed} km/h
            Pit Out: ${data.is_pit_out_lap ? 'Yes' : 'No'}
            Date: ${new Date(data.date_start).toLocaleString()}
        `;
        }
}
