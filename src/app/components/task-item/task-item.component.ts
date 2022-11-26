import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task:any
  @Output() onTaskDelete = new EventEmitter 
  @Output() onToggleRemainder = new EventEmitter

  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(task:any){
   this.onTaskDelete.emit(task)
  }
  onToggle(task:any){
   
    this.onToggleRemainder.emit()
    
  }
}
