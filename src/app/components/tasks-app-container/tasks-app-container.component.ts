import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks-app-container',
  templateUrl: './tasks-app-container.component.html',
  styleUrls: ['./tasks-app-container.component.css'],
})
export class TasksAppContainerComponent implements OnInit {
  newTaskList!: any;
  recivingTaskFromParent!: string;
  importingNewTask(newTaskListParameter: any) {
    this.newTaskList = newTaskListParameter;
    console.log('parent', this.newTaskList);
  }
  ngOnInit(): void {}
}
