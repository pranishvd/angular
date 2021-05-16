import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { TASK } from 'src/app/Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() addTask:EventEmitter<TASK> = new EventEmitter()
  
  text:string
  day:string
  reminder:boolean = false
  subscription:Subscription
  showTask:boolean
  constructor( private uiService:UiService) { 
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showTask = value));
  }

  ngOnInit(): void {
  }

  onTask(){
    if(!this.text){
      alert('please add text')
      return
    }

    const newTask ={
      text:this.text,
      day:this.day,
      reminder:this.reminder
    }

    this.addTask.emit(newTask)

    this.text = ''
    this.day = ''
    this.reminder = false
  }



}
