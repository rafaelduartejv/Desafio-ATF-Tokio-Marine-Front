import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private apiUrl = 'http://localhost:8080/api/usuarios'; // URL completa do backend

  constructor(private http: HttpClient) {}

  cadastrar(nome: string, email: string, senha: string): Observable<any> {
    const payload = { nome, email, senha };
    return this.http.post<any>(this.apiUrl, payload); // Faz a requisição para o backend
  }

  obterExtrato(numeroConta: string): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8080/api/transferencias/extrato/${numeroConta}`);
  }
  
  obterTransferenciasPorConta(numeroConta: string): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8080/api/transferencias/extrato/${numeroConta}`);
  }
  
  agendarTransferencia(payload: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/transferencias', payload);
  }
  

}
