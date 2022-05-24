import { Skill } from './interfaces/skill';
import { Component, OnInit } from '@angular/core';
import { HardSkills, SoftSkills } from './skills';

@Component({
  selector: 'jmc-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public hardSkills: Skill[] = HardSkills
  public softSkills: Skill[] = SoftSkills

  constructor() { }

  public ngOnInit(): void {
  }

}
