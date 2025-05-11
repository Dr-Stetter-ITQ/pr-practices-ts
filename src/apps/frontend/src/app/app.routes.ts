import { Routes } from '@angular/router';
import { DriversComponent } from './components/drivers.component';
import { CarComponent } from './components/car.component';

export const routes: Routes = [
  { path: '', component: DriversComponent },
  { path: 'cars', component: CarComponent }
]
