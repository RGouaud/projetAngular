import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { Inter } from '../models/inter';
import { IntersService } from '../services/inter.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-form-intervention',
  templateUrl: './form-intervention.component.html',
  styleUrls: ['./form-intervention.component.scss']
})
export class FormInterventionComponent {
  formulaire!: FormGroup;
  currentInter$!: Observable<Inter>;

  constructor(private formBuilder: FormBuilder, private intersService: IntersService, private router: Router) { };

  ngOnInit(): void {
    this.formulaire = this.formBuilder.group({
      nomTechnicien:[null, [Validators.required, Validators.minLength(3)]],
      dateIntervention:[null, [Validators.required, Validators.minLength(1)]],
      nomClient:[null, [Validators.required, Validators.minLength(1)]],
      adresseClient:[null, [Validators.required, Validators.minLength(1)]],
      descriptionIntervention:[null, [Validators.required, Validators.minLength(1)]],
      tempsPasse:[null, [Validators.required, Validators.min(1)]],
      marqueChaudiere:[null, [Validators.required, Validators.minLength(1)]],
      modeleChaudiere:[null, [Validators.required, Validators.minLength(1)]],
      dateMiseEnService:[null, [Validators.required, Validators.minLength(1)]],
      numeroSerie:[null, [Validators.required, Validators.minLength(1)]]
  },
  {
    updateOn: 'blur'
  });

  this.currentInter$ = this.formulaire.valueChanges.pipe(map(formValue=>(
    {
      id:0,
      nomTechnicien: formValue.nomTechnicien,
      dateIntervention: formValue.dateIntervention,
      nomClient: formValue.nomClient,
      adresseClient: formValue.adresseClient,
      descriptionIntervention: formValue.descriptionIntervention,
      tempsPasse: formValue.tempsPasse,
      marqueChaudiere: formValue.marqueChaudiere,
      modeleChaudiere: formValue.modeleChaudiere,
      dateMiseEnService: formValue.dateMiseEnService,
      numeroSerie: formValue.numeroSerie
    })));
  }

  addInter(){
    let newInter: Inter = {
      id:0,
      nomTechnicien: this.formulaire.get("nomTechnicien")?.value,
      dateIntervention: this.formulaire.get("dateIntervention")?.value,
      nomClient: this.formulaire.get("nomClient")?.value,
      adresseClient: this.formulaire.get("adresseClient")?.value,
      descriptionIntervention: this.formulaire.get("descriptionIntervention")?.value,
      tempsPasse: this.formulaire.get("tempsPasse")?.value,
      marqueChaudiere: this.formulaire.get("marqueChaudiere")?.value,
      modeleChaudiere: this.formulaire.get("modeleChaudiere")?.value,
      dateMiseEnService: this.formulaire.get("dateMiseEnService")?.value,
      numeroSerie: this.formulaire.get("numeroSerie")?.value
    };

    console.log(newInter);

    this.intersService.addInter(newInter).pipe(
      tap(() => this.router.navigate(['/intervention'])
      )).subscribe();
  }
}
