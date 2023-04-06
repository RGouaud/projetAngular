import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inter } from '../models/inter';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

/**
 * @done : traduire le service inters.service.ts en inter.service.ts
 */

@Injectable({
  providedIn: 'root'
})
export class IntersService {

  constructor(private http : HttpClient) { }

  getAllInter(): Observable<Inter[]> {
    return this.http.get<Inter[]>('http://localhost:3001/INTERVENTION');
  }

  getInterById(id: number): Observable<Inter>{
    const inter = this.http.get<Inter>('http://localhost:3001/INTERVENTION/'+id);
    if(inter){
      return inter;
    }
    throw new Error ("inter introuvable");
  }

  addInter(inter: Inter): Observable<Inter>{
    return this.getAllInter().pipe( // pipe = chainage de fonctions 
      map(inters => [...inters].sort((a,b) => a.id - b.id)), //map = appliquer une fonction, ici on trie
      map(inters_tries => inters_tries[inters_tries.length - 1]), //map = appliquer une fonction, ici on prend le dernier
      map(inter_max => {
        inter.id = inter_max.id + 1;
        return inter;
      }), //map = appliquer une fonction, ici on incrémente le dernier + 1
      switchMap(inter => this.http.post<Inter>('http://localhost:3001/INTERVENTION', inter)) // déclenche l'envoi
    );
  }

}
