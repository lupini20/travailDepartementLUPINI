import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { DepartementListComponent } from './departement/pages/departement-list/departement-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'travailleurs',
    pathMatch: 'full' 
  },


  {
    path: 'travailleurs',
    loadChildren: () => import('./travailleur/travailleur.module').then(m => m.TravailleurModule)
  },
  

  {
  path : '**',
  component: NotFoundComponent
  }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
