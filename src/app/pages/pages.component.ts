import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../@theme/animations/fade';

@Component({
  selector: 'jmc-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <jmc-header></jmc-header>
    <div role="main" class="scrollable-container" [@fadeAnimation]="outlet.isActivated ? outlet.activatedRoute : ''">
      <router-outlet #outlet="outlet"></router-outlet>
    </div>
    <jmc-footer></jmc-footer>
  `,
  animations: [fadeAnimation]
})
export class PagesComponent implements OnInit {
  constructor() {}

  public ngOnInit(): void {}
}
