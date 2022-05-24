
import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { AboutComponent } from './about/about.component';
import { QualificationsComponent } from './qualifications/qualifications.component';
import { SkillsComponent } from './skills/skills.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const COMPONENTS = [
  PagesComponent,
  AboutComponent,
  QualificationsComponent,
  SkillsComponent,
  UnderConstructionComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    PagesRoutingModule,
    ThemeModule,
    TranslateModule.forChild(),
  ]
})
export class PagesModule {}
