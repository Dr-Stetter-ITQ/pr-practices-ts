import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface driver {
  broadcast_name: string;
  country_code: string;
  driver_number: number;
  first_name: string;
  full_name: string;
  headshot_url: string;
  last_name: string;
  meeting_key: number;
  name_acronym: string;
  session_key: number;
  team_colour: string;
  team_name: string;
}

@Injectable({
  providedIn: 'root'
})
export class DriverService implements {

    private apiUrl = 'http://localhost:3000/v2/drivers';
    
    constructor(private http: HttpClient) { }

    getDrivers(): Observable<any[]> {
        return this.http.get<Driver[]>(this.apiUrl);
    }
}
