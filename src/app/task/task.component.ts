import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks:Task[] = [
          new Task('Study Certificate','This will install the updated version of the...'),
          new Task('Study Diploma','This will install the updated version of the...'),
          new Task('Study Degree','This will install the updated version of the...'),
          new Task('Study PhD','This will install the updated version of the...'),
  ]

  constructor() { }

  ngOnInit(): void {
  }


  public toggleDetails(i){
       this.tasks[i].moreDetails = !this.tasks[i].moreDetails;
  }


  delTask(e:any, i:number){
    this.tasks.splice(i,1);
  }

}
