import { Component, Input } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-tasks-container',
  templateUrl: './tasks-container.component.html',
  styleUrls: ['./tasks-container.component.css'],
})
export class TasksContainerComponent {
  task!: any;
  index!: number;
  @Input() newTaskList: any;

  deleteTask(task: any) {
    this.task = task;
    this.index = this.newTaskList?.indexOf(task);
    this.newTaskList.splice(this.index, 1);
  }
  toggleCheck(event: any) {
    this.newTaskList = this.newTaskList.map((task: Task) => {
      if (task.id == event.target.id) {
        task.status = event.target.checked;
      }
      return task;
    });
  }
}
