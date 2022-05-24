import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { SkillsComponent } from './skills/skills.component';
import { QualificationsComponent } from './qualifications/qualifications.component';
import { AboutComponent } from './about/about.component';
import { PresentationComponent } from './../@theme/components/presentation/presentation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'about', pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
      { path: 'qualification', component: QualificationsComponent},
      { path: 'skill', component: SkillsComponent },
      { path: 'under-construction', component: UnderConstructionComponent },
      { path: '**', redirectTo: 'others', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
