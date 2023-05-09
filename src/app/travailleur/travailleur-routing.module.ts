import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravailleurDetailsComponent } from './pages/travailleur-details/travailleur-details.component';
import { TravailleurListComponent } from './pages/travailleur-list/travailleur-list.component';
import { TravailleurComponent } from './travailleur.component';

const routes: Routes = [
  {
    path: '',
    component: TravailleurListComponent
  },
  {
    path:':id',
    component: TravailleurDetailsComponent
  }
 ];

 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TravailleurRoutingModule { }