import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
    firstTime = true;
    carData: any = [];

    drivers = [
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

    constructor(private fb: FormBuilder, private carService: CarService) {}

    ngOnInit(): void {
        this.form = this.createForm();
    }
    

    private createForm() {
        return this.fb.group({
            driver_number: ['', Validators.required],
            speed: ['', Validators.required],
        });
    }

    getCar() {
        if (this.form.invalid) return;

        const { driver_number, speed } = this.form.value;

        this.carService.getCar(driver_number, speed).subscribe({
            next: (data) => this.carData = data,
            error: (err) => console.error('Error fetching car data:', err),
        });
        
        this.firstTime = false;
    }
}
