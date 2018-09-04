import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './iuser';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  public getUsers():Observable<IUser[]>{
    return this.http.get<IUser[]>('/getKorisnici');
  }

  public aktiviraj(user): Observable<any>{
  	return this.http.put<any>('/aktiviraj',user);
  }

  public blokiraj(user): Observable<any>{
  	return this.http.put<any>('/blokiraj',user);
  }

  public ukloni(user): Observable<any>{
  	return this.http.put<any>('/ukloni',user);
  }
}
