import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-task-description',
  templateUrl: './task-description.component.html',
  styleUrls: ['./task-description.component.css']
})
export class TaskDescriptionComponent implements OnInit {

  @Input()  task:Task;

  @Output() deleteItem =  new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
      //console.log(this.task+'hamk')
  }

  deleteTask(e:any){
        this.deleteItem.emit(e);
  }
    
}
