import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from 'express';
import { Observable, Subject, takeUntil } from 'rxjs';
import { GenericPopupComponent } from 'src/app/shared/components/generic-popup/generic-popup.component';
import { TravailleurFormComponent } from 'src/app/travailleur/components/travailleur-form/travailleur-form.component';
import { Travailleur } from 'src/app/travailleur/models/travailleur';
import { TravailleurService } from 'src/app/travailleur/services/travailleur.service';
import { DepartementFormComponent } from '../../components/departement-form/departement-form.component';
import { Departement } from '../../models/departement';
import { DepartementService } from '../../services/departement.service';

@Component({
  selector: 'app-departement-list',
  templateUrl: './departement-list.component.html',
  styleUrls: ['./departement-list.component.scss']
})
export class DepartementListComponent implements OnInit,
OnDestroy {




  
  

  departements$!: Observable<Departement[]>;



  

 
 
  
  displayedColumns: string[] = ['nom', 'update', 'delete'];
 
 
 
  openDepartementForm(departement?: Departement) {
    const dialogRef = this.dialog.open(DepartementFormComponent, {
      height: '85%',
      width: '60%',
      data: {
        isCreateForm: departement ? false : true,
        departement: departement ? departement : undefined
      }
    });

    dialogRef.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        if (result) {
          this.fetchData();
        }
      });
  }

 


  private destroy$: Subject<boolean> = new Subject<boolean>();
  
  constructor(private departementService: DepartementService, private dialog: MatDialog, private _snackBar: MatSnackBar,
    private router: Router){
      
    
  }
  
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  
   ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.departements$ = this.departementService.get();
  }
  
  delete(id: number) {
    const ref = this.dialog.open(GenericPopupComponent, {
      data: {
        title: 'Confirmation de suppression',
        message: 'êtes-vous sûr de vouloir supprimer cet étudiant ?',
        typeMessage: 'none',
        yesButtonVisible: true,
        noButtonVisible: true,
        cancelButtonVisible: false,
        defaultButton: 'No',
        yesButtonLabel: 'Oui',
        noButtonLabel: 'Non',
      },
    })

    ref.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        if (result) {
          this.departementService.delete(id)
            .pipe(takeUntil(this.destroy$))
            .subscribe(result => {
              this._snackBar.open(result, '', {
                duration: 2000,
                panelClass: ['bg-success']
              });
              this.fetchData();
            });
        }
      });
  }

  


  

  
 
 
  

}
