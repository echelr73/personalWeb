import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TatetiComponent } from './tateti/tateti.component';

const routes: Routes = [
  { path: 'tateti', component: TatetiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
