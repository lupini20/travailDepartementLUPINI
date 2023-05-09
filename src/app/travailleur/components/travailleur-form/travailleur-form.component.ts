import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Travailleur } from '../../models/travailleur';
import { TravailleurService } from '../../services/travailleur.service';
import { DepartementService } from 'src/app/departement/services/departement.service';
import { Departement } from 'src/app/departement/models/departement';
import * as moment from 'moment';


export interface TravailleurFormData {
  isCreateForm: boolean;
  travailleur: Travailleur;
}

@Component({
  selector: 'app-travailleur-form',
  templateUrl: './travailleur-form.component.html',
  styleUrls: ['./travailleur-form.component.Scss']
})


export class TravailleurFormComponent implements OnDestroy {

  
  departements: Departement[] = [];
  status: string[] = [
    'done',
    'not yet'
  ];
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: TravailleurFormData,
    private fb: FormBuilder,
    private travailleurService: TravailleurService,
    private departementService: DepartementService,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<TravailleurFormComponent>,
    
  ) { }
  ngOnDestroy(): void {
    
    this.destroy$.complete();
  }

  ngOnInit(): void {
    
    this.departementService.get().pipe(takeUntil(this.destroy$)).subscribe((departements: Departement[]) => {
      this.departements = departements;
    });

    if (!this.data.isCreateForm) {
      this.setTravailleur(this.data.travailleur);
    }
  }

  
    travailleurForm = this.fb.group({
      id:  [0, [Validators.required]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.email]],
      tache: ['', [Validators.required]],
      status: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      dateOfBirth: ['', Validators.required],
      departementId: [0, Validators.required],
    });
  

  setTravailleur(travailleur: Travailleur) {
    
    this.travailleurForm.setValue({
      id:travailleur.id,
      lastName: travailleur.lastName,
      firstName: travailleur.firstName,
      tache: travailleur.tache,
      phoneNumber: travailleur.phoneNumber,
      status: travailleur.status,
      email: travailleur.email,
      dateOfBirth: travailleur.dateOfBirth,
      departementId: travailleur.departementId,

    });
  }

  get title() {
    return this.data.isCreateForm ? 'Formulaire de création' : 'Formulaire de modification';
  }

  get submitBtnName() {
    return this.data.isCreateForm ? 'Ajouter' : 'Modifier';
  }

  onSubmit(){
    if(this.travailleurForm.valid){
      const dateOfBirth = this.travailleurForm.value.dateOfBirth;
      if (dateOfBirth) {
        this.travailleurForm.value.dateOfBirth = new Date(dateOfBirth).toISOString();
      }
      
      if(this.data.isCreateForm){
        this.travailleurForm.value.id = Date.now() + Math.random();
        this.travailleurService.create(this.travailleurForm.value as unknown as Travailleur)
        .pipe(takeUntil(this.destroy$))
        .subscribe(result => {
          this._snackBar.open(result, '', {
            duration: 2000,
            panelClass: ['bg-success']
          });

          this.dialogRef.close(true);
        });
      }else{
        this.travailleurService.update(this.travailleurForm.value as unknown as Travailleur)
        .pipe(takeUntil(this.destroy$))
        .subscribe(result => {
          this._snackBar.open(result, '', {
            duration: 2000,
            panelClass: ['bg-success']
          });
          this.dialogRef.close(true);
        });
      }
    }
  }
}
