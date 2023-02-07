import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { TatetiComponent } from './tateti/tateti.component';

const routes: Routes = [
  { path: '', component: MenuComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'menu/tateti', component: TatetiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
