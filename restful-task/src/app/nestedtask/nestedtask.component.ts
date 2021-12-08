import { Component, Input, OnInit } from '@angular/core';
import { TasksService } from './../tasks/tasks.service';

@Component({
  selector: 'app-nestedtask',
  templateUrl: './nestedtask.component.html',
  styleUrls: ['./nestedtask.component.css']
})
export class NestedtaskComponent implements OnInit {

  @Input() task:any = {};

  constructor(private _HttpService: TasksService) { }

  ngOnInit(): void {
  }

}
