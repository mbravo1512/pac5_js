import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Capitulos } from '../models/capitulos.interface'

@Injectable({
  providedIn: 'root'
})
export class CapitulosService {

  constructor(private http:HttpClient) { }

  getAllCapitulos(): Observable<Capitulos[]>{
    return this.http.get<Capitulos[]>('https://breakingbadapi.com/api/characters');
  }
  getPortadasCapituloId(char_id: String): Observable<Capitulos[]>{
    return this.http.get<Capitulos[]>('https://breakingbadapi.com/api/characters/'+char_id);
  }
}
