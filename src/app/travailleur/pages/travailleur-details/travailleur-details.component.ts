import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Travailleur } from '../../models/travailleur';
import { Departement } from '../../../departement/models/departement';
import { TravailleurService } from '../../services/travailleur.service';
import { DepartementService } from '../../../departement/services/departement.service';
import { Location } from '@angular/common';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-travailleur-details',
  templateUrl: './travailleur-details.component.html',
  styleUrls: ['./travailleur-details.component.scss']
})
export class TravailleurDetailsComponent implements OnInit {

  
  travailleurId: number = 0; // ou une autre valeur par défaut appropriée


  travailleur$: Observable<Travailleur> = of(); // ou une autre valeur par défaut appropriée

  constructor(private route: ActivatedRoute, private travailleurService: TravailleurService, private location: Location){
    route.params.subscribe(params=>{
      this.travailleurId = params['id'];
    })

  }

  ngOnInit():void{
    if (this.travailleurId){
      this.travailleur$ = this.travailleurService.getByid(this.travailleurId)


    }
  }

  goBack(){
    this.location.back();
  }

  showReceivedValue(value: boolean){
    console.log(value);
  }

}



    
    

  
    
    
 
