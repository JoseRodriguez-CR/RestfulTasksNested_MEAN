import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//importing Http module
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';

//importing TasksService
import { TasksService } from './tasks/tasks.service';
import { NestedtaskComponent } from './nestedtask/nestedtask.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    NestedtaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
