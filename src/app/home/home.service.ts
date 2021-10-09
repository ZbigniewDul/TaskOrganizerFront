import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SecurityService } from '../security/security.service';
import { taskDTO } from '../tasks/tasks.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient, private securityService: SecurityService) { }

  private apiURL = environment.apiURL + '/';

  getNotInProgress(): Observable<taskDTO[]>{
    let params = new HttpParams();
    params = params.append('name', this.securityService.getFieldFromJWT('name'))
    return this.http.get<taskDTO[]>(this.apiURL, {params});
  }

  getInProgress(): Observable<taskDTO[]>{
    let params = new HttpParams();
    params = params.append('name', this.securityService.getFieldFromJWT('name'))
    return this.http.get<taskDTO[]>(`${this.apiURL}inProgress`, {params});
  }

  getCompleted(): Observable<taskDTO[]>{
    let params = new HttpParams();
    params = params.append('name', this.securityService.getFieldFromJWT('name'))
    return this.http.get<taskDTO[]>(`${this.apiURL}completed`, {params});
  }
}
