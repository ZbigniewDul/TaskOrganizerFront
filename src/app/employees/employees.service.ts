import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { employeeCreationDTO, employeeDTO, PostGetDTO, PutGetDTO } from './employees.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + '/employees';

  getAll(page: number, recordsPerPage: number): Observable<any>{
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('recordsPerPage', recordsPerPage.toString());
    return this.http.get<employeeDTO[]>(this.apiURL, {observe: 'response', params});
  }

  getById(id: number): Observable<employeeDTO>{
    return this.http.get<employeeDTO>(`${this.apiURL}/${id}`);
  }

  public postGet(): Observable<PostGetDTO>{
    return this.http.get<PostGetDTO>(`${this.apiURL}/postget`);
  }

  public putGet(id:number): Observable<PutGetDTO>{
    return this.http.get<PutGetDTO>(`${this.apiURL}/putget/${id}`);
  }

  create(employeeCreationDTO: employeeCreationDTO){
    return this.http.post(this.apiURL, employeeCreationDTO);
  }

  edit(employeeCreationDTO: employeeCreationDTO, id: number){
    return this.http.put(`${this.apiURL}/${id}`, employeeCreationDTO);
  }

  delete(id: number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
