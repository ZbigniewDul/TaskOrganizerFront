import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SecurityService } from '../security/security.service';
import { employeeCreationDTO, employeeDTO, PostGetDTO, PutGetDTO } from './employees.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient, private securityService: SecurityService) { }

  private apiURL = environment.apiURL + '/employees';

  getAll(page: number, recordsPerPage: number): Observable<any>{
    const userName = this.securityService.getFieldFromJWT('name');
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('recordsPerPage', recordsPerPage.toString());
    params = params.append('name', userName)
    return this.http.get<employeeDTO[]>(this.apiURL, {observe: 'response', params});
  }

  getById(id: number): Observable<employeeDTO>{
    return this.http.get<employeeDTO>(`${this.apiURL}/${id}`);
  }

  public postGet(): Observable<any>{
    let params = new HttpParams();
    const userName = this.securityService.getFieldFromJWT('name');
    params = params.append('name', userName);
    return this.http.get<PostGetDTO>(`${this.apiURL}/postget`, {params});
  }

  public putGet(id:number): Observable<any>{
    let params = new HttpParams();
    params = params.append('name', this.securityService.getFieldFromJWT('name'));
    return this.http.get<PutGetDTO>(`${this.apiURL}/putget/${id}`, {params});
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
