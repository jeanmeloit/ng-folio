import { UserService } from './../../../user/user.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'jmc-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent implements OnInit {

  public name: string = 'Jean Melo'
  public titles: string[] = ['Front End Developer', 'Tech Lead', 'Apps Developer', 'UI/UX Designer', 'Getting Certified as Scrum Master']
  public cvMessage: string = 'Download CV'
  public detailsText: string = 'Know me! '

  constructor(private router: Router, private user: UserService) { }

  public ngOnInit(): void {
  }

  public redirectToDetails(): void {
    this.user.loggedValue = true
    this.router.navigate(['/about']);
  }

}
