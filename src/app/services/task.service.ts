import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import {TASKS} from "../mock-tasks"
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers : new HttpHeaders({
    "Content-Type":'application/json'
  })
}

@Injectable({
  providedIn: 'root',
})


export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';
  constructor(private http: HttpClient) {}
  getTasks(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  deleteTask(task:any):Observable<any>{
    const url =`${this.apiUrl}/${task.id}`
    return this.http.delete(url)
  }
  updateReminder(task:any){
    const url =`${this.apiUrl}/${task.id}`
    return this.http.put(url,task,httpOptions)
  }
  addTask(task:any){
    return this.http.post(this.apiUrl,task,httpOptions)
  }
}
