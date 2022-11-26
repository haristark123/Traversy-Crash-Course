import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask = new EventEmitter()
  showAddTask: any;
  subscription: Subscription;
  text:any;
  day:any;
  reminder:any = false
  

  constructor(private uiService : UiService) {
    this.subscription = this.uiService
    .onToggle()
    .subscribe((value) => (this.showAddTask = value));
   }

  ngOnInit(): void {
  }

   onSubmit(){
     if (!this.text){
       alert("Please Add YOur Task")
       return
     }
     const newTask = {
       text:this.text,
       day:this.day,
       reminder:this.reminder
     }

     //service to add 
     this.onAddTask.emit(newTask)

     this.text = ""
     this.day=''
     this.reminder=false
   }
}
