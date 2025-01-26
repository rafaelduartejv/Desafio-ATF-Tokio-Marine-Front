import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-extrato',
  standalone: true,
  imports: [CommonModule], // Importa CommonModule para usar *ngFor, *ngIf, CurrencyPipe e DatePipe
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css'],
})
export class ExtratoComponent implements OnInit {
  extratos: any[] = [];
  mensagem: string | null = null;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.carregarExtrato();
  }

  carregarExtrato() {
    const numeroConta = localStorage.getItem('numeroConta');
    if (!numeroConta) {
      this.mensagem = 'Número da conta não encontrado. Faça login novamente.';
      return;
    }

    this.usuarioService.obterExtrato(numeroConta).subscribe({
      next: (res) => {
        this.extratos = res.filter(
          (t) => t.contaOrigem === numeroConta || t.contaDestino === numeroConta
        );
      },
      error: (err) => {
        console.error('Erro ao carregar o extrato:', err);
        this.mensagem = 'Erro ao carregar o extrato. Tente novamente.';
      },
    });
  }
}
