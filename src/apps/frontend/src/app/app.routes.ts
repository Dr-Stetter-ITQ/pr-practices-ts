import { Routes } from '@angular/router';
import { DriversComponent } from './components/drivers.component';
import { CarComponent } from './components/car.component';
import { LapsComponentes } from './components/laps.component';

export const routes: Routes = [
  { path: '', component: DriversComponent },
  { path: 'cars', component: CarComponent },
  { path: 'laps', component: LapsComponentes }
]
