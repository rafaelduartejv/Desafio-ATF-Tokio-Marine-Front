import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth/login'; // URL completa do backend

  constructor(private http: HttpClient) {}

  login(email: string, senha: string): Observable<any> {
    const payload = { usuarioDTO: { email, senha } };
    return this.http.post<any>(this.apiUrl, payload); // Faz a requisição para o backend
  }
}
