import { Component, Input } from '@angular/core';
import { Inter } from '../models/inter';
import { IntersService } from '../services/inter.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-intervention',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.scss']
})
export class InterventionComponent {
  @Input() lIntervention!: Inter;
  uneIntervention!: Inter;

  constructor(private interService:IntersService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const idInter = this.route.snapshot.params['id'];
    if(idInter !== undefined){
      this.interService.getInterById(+idInter).subscribe(inter => this.uneIntervention = inter);
    }
    else{
    this.uneIntervention = this.lIntervention;
    }
  }
}


