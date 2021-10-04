import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { taskDTO } from '../tasks/tasks.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + '/';

  getNotInProgress(): Observable<taskDTO[]>{
    return this.http.get<taskDTO[]>(this.apiURL);
  }

  getInProgress(): Observable<taskDTO[]>{
    return this.http.get<taskDTO[]>(`${this.apiURL}inProgress`);
  }

  getCompleted(): Observable<taskDTO[]>{
    return this.http.get<taskDTO[]>(`${this.apiURL}completed`);
  }
}
