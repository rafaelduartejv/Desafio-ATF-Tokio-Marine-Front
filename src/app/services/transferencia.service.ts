import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private apiUrl = 'http://localhost:8080/api/transferencias'; // Backend

  constructor(private http: HttpClient) {}

  agendarTransferencia(
    valor: number,
    dataTransferencia: string,
    contaOrigem: string,
    contaDestino: string
  ): Observable<any> {
    const payload = { valor, dataTransferencia, contaOrigem, contaDestino };
    return this.http.post<any>(this.apiUrl, payload);
  }

  obterTransferencias(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  obterExtrato(numeroConta: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/extrato/${numeroConta}`);
  }
}
