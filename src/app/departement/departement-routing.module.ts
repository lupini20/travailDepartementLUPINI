import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartementDetailsComponent } from './pages/departement-details/departement-details.component';
import { DepartementListComponent } from './pages/departement-list/departement-list.component';

const routes: Routes = [
  {
    path: '',
    component: DepartementListComponent
  },
  {
    path:':id',
    component: DepartementDetailsComponent
  }
 ];

 


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartementRoutingModule { }
