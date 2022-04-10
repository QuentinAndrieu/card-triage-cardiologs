import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardPatient } from 'src/models/CardPatient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private http: HttpClient) {}

  getCards(): Observable<CardPatient[]> {
    return this.http.get<CardPatient[]>('http://localhost:3000/cards');
  }
}
