import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  senha: string = '';
  erro: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.senha).subscribe({
      next: (res) => {
        console.log('Login realizado com sucesso:', res);
        localStorage.setItem('token', res.token);
        localStorage.setItem('numeroConta', res.numeroConta);
        // Redirecionar para a página de transferências
        this.router.navigate(['/transferencia']);
      },
      error: (err) => {
        console.error('Erro no login:', err);
        this.erro = 'Email ou senha inválidos';
      },
    });
  }

  irParaRegistro() {
    this.router.navigate(['/registrar']);
  }
}
