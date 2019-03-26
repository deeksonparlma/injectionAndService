import { Component, OnInit } from '@angular/core';
import {Goal} from './goal';
import {GoalService} from '../goals/goal.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
  providers:[GoalService],
})
export class GoalComponent implements OnInit {
 goals:Goals;
  constructor() { }

  ngOnInit() {
  }

}
