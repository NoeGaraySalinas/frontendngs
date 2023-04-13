import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { persona } from '../model/persona.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
 URL = 'https://portfoliowebap.web.app/';
  constructor(private http: HttpClient) { }

  public getPersona(): Observable <persona> {
    return this.http.get<persona>(this.URL+ '/traer/perfil');
  }
}
