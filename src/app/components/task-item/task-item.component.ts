import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { TASK } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task:TASK

  @Output() onDeleteTask:EventEmitter<TASK> = new EventEmitter();
  @Output() onTogglerReminder:EventEmitter<TASK> = new EventEmitter();


  faTimes = faTimes;

  constructor() { }


  deleteTask(task){
    this.onDeleteTask.emit(task)
  }

  onToggle(task){
    this.onTogglerReminder.emit(task)
  }

  ngOnInit(): void {
  }

}
