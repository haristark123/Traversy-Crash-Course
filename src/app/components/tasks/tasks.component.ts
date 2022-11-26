import { Component, OnInit } from '@angular/core';
// import {TASKS} from '../../mock-tasks'
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  // tasks = TASKS
 
  tasks: any = [];
  constructor(private taskService: TaskService) {
   
  }

  ngOnInit(): void {
    this.tasks = this.taskService
      .getTasks()
      .subscribe((tasks) => (this.tasks = tasks));
  }

  onDeleteTask(task: any) {
    console.log(task);
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t: any) => t.id !== task.id))
      );
  }
  onReamainderToggle(task: any) {
    console.log('Db Clicked');
    task.reminder = !task.reminder;
    this.taskService.updateReminder(task).subscribe();
  }
  addTask(newTask: any) {
    console.log(newTask);
    this.taskService.addTask(newTask).subscribe((task)=>this.tasks.push(task))
  }
}
