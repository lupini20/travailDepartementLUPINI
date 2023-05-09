import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravailleurRoutingModule } from './travailleur-routing.module';
import { TravailleurComponent } from './travailleur.component';
import { SharedModule } from '../shared/shared.module';
import { TravailleurListComponent } from './pages/travailleur-list/travailleur-list.component';
import { TravailleurFormComponent } from './components/travailleur-form/travailleur-form.component';
import { TravailleurDetailsComponent } from './pages/travailleur-details/travailleur-details.component';
import { TravailleurCardComponent } from './components/travailleur-card/travailleur-card.component';
import { TravailleurListAComponent } from './pages/travailleur-list-a/travailleur-list-a.component';


@NgModule({
  declarations: [
    TravailleurComponent,
    TravailleurListComponent,
    TravailleurFormComponent,
    TravailleurDetailsComponent,
    TravailleurCardComponent,
    TravailleurListAComponent
  ],
  imports: [
    CommonModule,
    TravailleurRoutingModule,
    SharedModule
  ]
})
export class TravailleurModule { }
