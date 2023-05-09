import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Departement } from '../models/departement';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  
 
  
  constructor(private http: HttpClient) { }

  get() : Observable<Departement[]>{
    return this.http.get<Departement[]>(environment.iutApiBaseUrl+"/departements");
  }

  getDepartementNameById(id: number): Observable<string> {
    return this.getByid(id).pipe(
      map(departement => departement.nom)
    );
  }
 

  
  
 getByid(id:number) : Observable<Departement>{
  return this.http.get<Departement>(environment.iutApiBaseUrl+"/departements/"+id);
}

 delete(id: number): Observable<string>{
  return this.http.delete<string>(environment.iutApiBaseUrl+"/departements/"+id);
}
update(departement: Departement): Observable<string>{
  return this.http.put<string>(environment.iutApiBaseUrl+"/departements/"+departement.id, departement);
}

create(departement: Departement): Observable<string>{
  return this.http.post<string>(environment.iutApiBaseUrl+"/departements", departement);
}
  
}
