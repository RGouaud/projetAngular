import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListInterventionComponent } from './list-intervention/list-intervention.component';
import { InterventionComponent } from './intervention/intervention.component';
import { FormInterventionComponent } from './form-intervention/form-intervention.component';

const routes: Routes = [  
  {path: '', component: HomeComponent},
  {path: 'intervention', component: ListInterventionComponent},
  {path: 'intervention/:id', component : InterventionComponent},
  {path: 'formIntervention', component: FormInterventionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
