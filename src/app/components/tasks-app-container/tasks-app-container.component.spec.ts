import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksAppContainerComponent } from './tasks-app-container.component';

describe('TasksAppContainerComponent', () => {
  let component: TasksAppContainerComponent;
  let fixture: ComponentFixture<TasksAppContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasksAppContainerComponent]
    });
    fixture = TestBed.createComponent(TasksAppContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
