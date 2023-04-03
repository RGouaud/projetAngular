export class Inter {
    id!:number;
    nomTechnicien!:string;
    nomClient!:string;
    adresseClient!:string;
    marqueChaudiere!:string;
    modeleChaudiere!:string;
    dateMiseEnService!:Date;
    dateIntervention!:Date;
    numeroSerie!:string;
    descriptionIntervention!:string;
    tempsPasse!:number;
    
    constructor(id:number, nomTechnicien:string, nomClient:string, adresseClient:string, marqueChaudiere:string, modeleChaudiere:string, dateMiseEnService:Date, dateIntervention:Date, numeroSerie:string, descriptionIntervention:string, tempsPasse:number) {
        this.id = id;
        this.nomTechnicien = nomTechnicien;
        this.nomClient = nomClient;
        this.adresseClient = adresseClient;
        this.marqueChaudiere = marqueChaudiere;
        this.modeleChaudiere = modeleChaudiere;
        this.dateMiseEnService = dateMiseEnService;
        this.dateIntervention = dateIntervention;
        this.numeroSerie = numeroSerie;
        this.descriptionIntervention = descriptionIntervention;
        this.tempsPasse = tempsPasse;
    }
}