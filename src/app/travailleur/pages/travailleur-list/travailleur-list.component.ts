import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { GenericPopupComponent, GenericPopupData } from 'src/app/shared/components/generic-popup/generic-popup.component';
import { TravailleurFormComponent } from '../../components/travailleur-form/travailleur-form.component';
import { Travailleur } from '../../models/travailleur';
import { TravailleurService } from '../../services/travailleur.service';
import { of } from 'rxjs';


@Component({
  selector: 'app-travailleur-list',
  templateUrl: './travailleur-list.component.html',
  styleUrls: ['./travailleur-list.component.scss']
})


export class TravailleurListComponent implements OnInit,
OnDestroy {




  
  

  travailleurs$!: Observable<Travailleur[]>;



  

 
 
  
  displayedColumns: string[] = ['firstName', 'lastName', 'departement','tache','status','phoneNumber', 'email',  'update', 'delete'];
  refreshTable: any;
 
 
 
  openTravailleurForm(travailleur?: Travailleur) {
    const dialogRef = this.dialog.open(TravailleurFormComponent, {
      height: '85%',
      width: '60%',
      data: {
        isCreateForm: travailleur ? false : true,
        travailleur: travailleur ? travailleur : undefined
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
  
  constructor(private travailleurService: TravailleurService, private dialog: MatDialog, private _snackBar: MatSnackBar,
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
    this.travailleurs$ = this.travailleurService.get();
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
  
    ref.afterClosed().subscribe((result) => {
      console.log('result of dialog:', result);
      if (result){
        this.travailleurService.delete(id).subscribe(
          () => {
            // La suppression a été effectuée avec succès
            console.log('Travailleur supprimé avec succès');
            
          },
          (error) => {
            // La suppression a échoué
            console.log('Une erreur est survenue lors de la suppression du travailleur :', error);
          }
        );
      }
    });
  }
  

  showTravailleurDetails(travailleurId:number){
    this.router.navigate(['/travailleurs/'+travailleurId])
  }


  

  
 
 
  }