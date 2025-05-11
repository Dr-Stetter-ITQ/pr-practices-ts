import { Component, OnInit } from '@angular/core';
import { DriverService } from '../driver.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-drivers',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {
    conductores:any = [];

    constructor(private driverService: DriverService) { }

    ngOnInit(): void {
        this.driverService.getDrivers().subscribe({
            next: (data) => {
                this.conductores = data;
            },
            error: (err) => {
                console.error('Error fetching drivers:', err);
            },
        });
    }
}
