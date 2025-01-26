import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-transferencia',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css'],
})
export class TransferenciaComponent implements OnInit {
  contaOrigem: string = '';
  contaDestino: string = '';
  valor: number = 0;
  dataTransferencia: string = '';
  mensagem: string | null = null;
  agendamentosFeitos: any[] = [];
  extratos: any[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    const numeroConta = localStorage.getItem('numeroConta');
    if (!numeroConta) {
      this.mensagem = 'Número da conta não encontrado. Faça login novamente.';
      return;
    }
    this.contaOrigem = numeroConta;
    this.carregarAgendamentos();
    this.carregarExtrato();
  }

  carregarAgendamentos() {
    this.usuarioService.obterTransferenciasPorConta(this.contaOrigem).subscribe({
      next: (res: any[]) => {
        this.agendamentosFeitos = res.filter((t: any) => t.contaOrigem === this.contaOrigem);
      },
      error: (err) => {
        console.error('Erro ao carregar agendamentos:', err);
        this.mensagem = 'Erro ao carregar agendamentos. Tente novamente.';
      },
    });
  }

  carregarExtrato() {
    this.usuarioService.obterExtrato(this.contaOrigem).subscribe({
      next: (res: any[]) => {
        this.extratos = res.filter(
          (t: any) => t.contaOrigem === this.contaOrigem || t.contaDestino === this.contaOrigem
        );
      },
      error: (err) => {
        console.error('Erro ao carregar extrato:', err);
        this.mensagem = 'Erro ao carregar o extrato. Tente novamente.';
      },
    });
  }

  agendar() {
    const payload = {
      contaOrigem: this.contaOrigem,
      contaDestino: this.contaDestino,
      valor: this.valor,
      dataTransferencia: this.dataTransferencia,
    };

    this.usuarioService.agendarTransferencia(payload).subscribe({
      next: () => {
        this.mensagem = 'Transferência agendada com sucesso!';
        this.carregarAgendamentos();
        this.carregarExtrato();
        this.limparFormulario();
      },
      error: (err) => {
        console.error('Erro ao agendar transferência:', err);
        this.mensagem = 'Erro ao agendar transferência. Tente novamente.';
      },
    });
  }

  limparFormulario() {
    this.contaDestino = '';
    this.valor = 0;
    this.dataTransferencia = '';
  }

  baixarExtrato() {
    const doc = new jsPDF();
    let content = 'Extrato de Transferências\n\n';

    this.extratos.forEach((extrato, index) => {
      content += `${index + 1}. Conta Origem: ${extrato.contaOrigem}, Conta Destino: ${
        extrato.contaDestino
      }, Valor: R$ ${extrato.valor.toFixed(2)}, Taxa: R$ ${extrato.taxa.toFixed(
        2
      )}, Data Transferência: ${extrato.dataTransferencia}, Data Agendamento: ${extrato.dataAgendamento}\n\n`;
    });

    doc.text(content, 10, 10);
    doc.save(`extrato-${this.contaOrigem}.pdf`);
  }
}
