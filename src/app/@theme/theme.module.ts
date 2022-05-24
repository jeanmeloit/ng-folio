import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const COMPONENTS = [
  HeaderComponent,
  PresentationComponent,
  FooterComponent
]

const EXTERNALS = [
  NgxTypedJsModule
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    RouterModule,
    ...EXTERNALS,
    TranslateModule.forChild(),
  ],
  exports: [CommonModule, ...COMPONENTS, ...EXTERNALS],
})
export class ThemeModule { }
