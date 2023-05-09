import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartementRoutingModule } from './departement-routing.module';
import { DepartementComponent } from './departement.component';
import { SharedModule } from '../shared/shared.module';
import { DepartementListComponent } from './pages/departement-list/departement-list.component';
import { DepartementFormComponent } from './components/departement-form/departement-form.component';
import { DepartementDetailsComponent } from './pages/departement-details/departement-details.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    DepartementComponent,
    DepartementListComponent,
    DepartementFormComponent,
    DepartementDetailsComponent
  ],
  imports: [
    CommonModule,
    DepartementRoutingModule,
    SharedModule,
    MatIconModule,
    MatTableModule
   

  ]
})
export class DepartementModule { }
