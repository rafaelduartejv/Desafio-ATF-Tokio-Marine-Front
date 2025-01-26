import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
})
export class RegistrarComponent {
  nome: string = '';
  email: string = '';
  senha: string = '';
  mensagem: string | null = null;

  constructor(private usuarioService: UsuarioService) {}

  registrar() {
    this.usuarioService.cadastrar(this.nome, this.email, this.senha).subscribe({
      next: (res) => {
        console.log('Usuário registrado com sucesso:', res);
        this.mensagem = 'Usuário registrado com sucesso! Faça login.';
      },
      error: (err) => {
        console.error('Erro no registro:', err);
        if (err.status === 400) {
          this.mensagem = 'Dados inválidos. Verifique os campos e tente novamente.';
        } else {
          this.mensagem = 'Erro ao registrar usuário. Tente novamente.';
        }
      },
    });
  }
}
