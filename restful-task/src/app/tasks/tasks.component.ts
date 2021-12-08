import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  taskList: any[] = [];
  onetask: any = {
    title:"",
    description: "",
    completed: false
  };
  title:string = "";

  constructor( private _tasksService: TasksService ) {
  }

  ngOnInit(): void {
    //this.getAllTasksFromService();
    //this.showTaskFromService();
    
  }
  
  getAllTasksFromService(){
    console.log("Testting from service");
    let observable =  this._tasksService.getAllTask();
    console.log(observable);
    observable
    .subscribe((data:any)=> {
      console.log("Now you can see our Tasks API", data)
      this.taskList = data;
    }); 
  }

  showTaskFromService(event:any){
    event.preventDefault();
    this.title = event.target.title.value;
    console.log(this.title);
    let observable = this._tasksService.showTask(this.title);
    observable
    .subscribe((data:any)=> {
      console.log("Now you can see our Study Task API", data)
      this.onetask = data;
    });     
  }
}


/*
<div>
    Task description: {{task.description}}
</div>
<div>
    Task completed : {{task.completed}}
</div>
<div>
    Task created at: {{task.created_at}}
</div>
<div>
    Task updated at: {{task.created_at}}
</div>
*/