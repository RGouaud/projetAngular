import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Inter } from '../models/inter';
import { IntersService } from '../services/inter.service';


@Component({
  selector: 'app-list-intervention',
  templateUrl: './list-intervention.component.html',
  styleUrls: ['./list-intervention.component.scss']
})
export class ListInterventionComponent implements OnInit {
  listeInterventions$!: Observable<Inter[]>;

  constructor(private monIntersService: IntersService) { }

  ngOnInit(): void {
    this.listeInterventions$ = this.monIntersService.getAllInter();
  }

}
