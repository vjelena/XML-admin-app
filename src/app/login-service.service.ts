import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAdmin } from './iadmin';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  public prijava(admin):Observable<IAdmin>{
    return this.http.post<IAdmin>('/admin/prijava', admin);
  }
}
