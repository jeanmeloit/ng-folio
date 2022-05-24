import { fadeAnimation } from './@theme/animations/fade';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'jmc-root',
  template: `
    <div
      role="main"
      [@fadeAnimation]="outlet.isActivated ? outlet.activatedRoute : ''"
    >
      <router-outlet #outlet="outlet"></router-outlet>
    </div>
  `,
  animations: [fadeAnimation]
})
export class AppComponent {

  constructor(translate: TranslateService) {
  }

}
