import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'transferencia', component: TransferenciaComponent },
  { path: 'extrato', component: ExtratoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
