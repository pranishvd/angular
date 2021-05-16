import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {TASK} from '../Task';
import { HttpClient,HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:3000/tasks'


  constructor(private http:HttpClient) { }


  getTasks():Observable<TASK[]>{
    return this.http.get<TASK[]>(this.apiUrl)
  }

  delTasks(task:TASK): Observable<TASK>{
    const uri = `${this.apiUrl}/${task.id}`
    return this.http.delete<TASK>(uri);
  }

  toggleTask(task:TASK):Observable<TASK>{
    const uri = `${this.apiUrl}/${task.id}`
    return this.http.put<TASK>(uri,task,httpOptions)
  }


  addTheTask(task:TASK):Observable<TASK>{
    return this.http.post<TASK>(this.apiUrl,task,httpOptions)
  }

}
