import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment } from './icomment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {

  constructor(private http: HttpClient) { }

  public getComments():Observable<IComment[]>{
    return this.http.get<IComment[]>('/comment/getComm');
  }

  public odobri(comm): Observable<any>{
  	return this.http.put<any>('/comment/approve',comm);
  }
}
