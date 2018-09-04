import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IExtra } from './iextra';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExtraServiceService {

  constructor(private http: HttpClient) { }

  public getExtras():Observable<IExtra[]>{
    return this.http.get<IExtra[]>('/extra/getExtras');
  }

  public addExtra(extra):Observable<any>{
  	console.log(extra);
  	return this.http.post<any>('/extra/addExtra',extra);
  }

  public deleteExtra(extra): Observable<any>{
  	return this.http.put<any>('/extra/delete',extra);
  }

  public editExtra(id, ime): Observable<any>{
  console.log("id je " + id)
    return this.http.put<any>('/extra/edit/'+id, ime);
  }
}
