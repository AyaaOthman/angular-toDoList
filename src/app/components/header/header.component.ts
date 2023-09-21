import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../tasks-container/task';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  newTaskInput!: any;
  tasksList: Task[] = [];
  @Output() sendingNewTaskToParent = new EventEmitter<Task[]>();
  addNewTask() {
    if (!this.newTaskInput.trim()) {
      return;
    }
    this.tasksList.push({
      id: Math.random() * 100,
      task: this.newTaskInput,
      status: false,
    });
    this.sendingNewTaskToParent.emit(this.tasksList);
    console.log('child', this.tasksList);
    this.newTaskInput = '';
  }
  constructor() {}
  ngOnInit(): void {}
}
