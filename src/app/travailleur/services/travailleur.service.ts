import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Travailleur } from '../models/travailleur';
import { environment } from './../../../environments/environment';
import { DepartementService } from 'src/app/departement/services/departement.service';
import { Departement } from 'src/app/departement/models/departement';


@Injectable({
  providedIn: 'root'
})
export class TravailleurService {

  constructor(private http: HttpClient) { }


 

  get() : Observable<Travailleur[]>{
    return this.http.get<Travailleur[]>(environment.iutApiBaseUrl+"/travailleurs");
  }
 
  
  
 
  getByid(id:number) : Observable<Travailleur>{
   return this.http.get<Travailleur>(environment.iutApiBaseUrl+"/travailleurs/"+id);
 }
 
  delete(id: number): Observable<string>{
    return this.http.delete<string>(environment.iutApiBaseUrl+"/travailleurs/"+id)
    .pipe(
      tap(response => console.log(response)),
      catchError(error => {
        console.log(error);
        return of(error);
      })
    );
 }
 update(travailleur: Travailleur): Observable<string>{
   return this.http.put<string>(environment.iutApiBaseUrl+"/travailleurs/"+travailleur.id, travailleur);
 }
 
 create(travailleur: Travailleur): Observable<string>{
   return this.http.post<string>(environment.iutApiBaseUrl+"/travailleurs", travailleur);
 }
 }
 