import { Component, OnInit } from '@angular/core';
import { TASK } from '../../Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: TASK[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((t) => {
      this.tasks = t;
    });
  }

  taskDel(task: TASK) {
    this.taskService
      .delTasks(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  toggleItem(task: TASK) {
    task.reminder = !task.reminder;
    this.taskService.toggleTask(task).subscribe();
  }

  newTaskAdd(task: TASK) {
    this.taskService
      .addTheTask(task)
      .subscribe((task) => this.tasks.push(task));
  }
}
