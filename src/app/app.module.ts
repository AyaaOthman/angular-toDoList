import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasksAppContainerComponent } from './components/tasks-app-container/tasks-app-container.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TasksContainerComponent } from './components/tasks-container/tasks-container.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksAppContainerComponent,
    HeaderComponent,
    TasksContainerComponent,
  ],
  imports: [BrowserModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
