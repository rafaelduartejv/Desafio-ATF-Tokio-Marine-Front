import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { RegistrarComponent } from './registro/registrar.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'transferencia', component: TransferenciaComponent },
  { path: 'extrato', component: ExtratoComponent },
];
