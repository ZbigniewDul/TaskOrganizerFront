import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { taskCreationDTO, taskDTO } from './tasks.model';
import { Observable } from 'rxjs';
import { SecurityService } from '../security/security.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient, private securityService: SecurityService) { }

  private apiURL = environment.apiURL + '/tasks';

  getAll(page: number, recordsPerPage: number): Observable<any>{
    const token = this.securityService.getFieldFromJWT('name');
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('recordsPerPage', recordsPerPage.toString());
    params = params.append('name', token);
    return this.http.get<taskDTO[]>(this.apiURL, {observe: 'response', params});
  }

  create(task: taskCreationDTO){
    return this.http.post(this.apiURL, task);
  }

  getById(id: number): Observable<taskDTO>{
    return this.http.get<taskDTO>(`${this.apiURL}/${id}`)
  }

  edit(id: number, task: taskDTO){
    return this.http.put(`${this.apiURL}/${id}`, task);
  }

  editStatus(id: number, task: taskDTO){
    task.userName = this.securityService.getFieldFromJWT('name');
    return this.http.put(`${this.apiURL}/putStatus/${id}`, task);
  }

  delete(id: number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }

}
