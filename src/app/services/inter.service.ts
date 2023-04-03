import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inter } from '../models/inter';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

/**
 * @done : traduire le service cds.service.ts en inter.service.ts
 */

@Injectable({
  providedIn: 'root'
})
export class CdsService {

  constructor(private http : HttpClient) { }

  getAllInter(): Observable<Inter[]> {
    return this.http.get<Inter[]>('http://localhost:3001/INTER');
  }

  getInterById(id: number): Observable<Inter>{
    const cd = this.http.get<Inter>('http://localhost:3001/CD/'+id);
    if(cd){
      return cd;
    }
    throw new Error ("Cd introuvable");
  }

  addInter(inter: Inter): Observable<Inter>{
    return this.getAllInter().pipe(
      map(cds => [...cds].sort((a,b) => a.id - b.id)),
      map(cds_tries => cds_tries[cds_tries.length - 1]),
      map(cd_max => (inter.id=cd_max.id+1)),
      switchMap(cd => this.http.post<Inter>('http://localhost:3001/CD', cd))
    );
  }

}
