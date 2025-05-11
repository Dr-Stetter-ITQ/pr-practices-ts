import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface CarData {
    brake: number;
    date: string;
    driver_number: number;
    drs: number;
    meeting_key: number;
    n_gear: number;
    rpm: number;
    session_key: number;
    speed: number;
    throttle: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarService {

    private apiUrl = 'http://localhost:3000/v1/car-data';
        
    constructor(private http: HttpClient) { }

    getCar(driver_number: string, speed: string): Observable<CarData[]> {
        const params = {
            driver_number,
            speed,
        };
        return this.http.get<CarData[]>(this.apiUrl, { params });
    }
}
