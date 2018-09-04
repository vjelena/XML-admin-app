import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAgent } from './iagent';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AgentServiceService {

  constructor(private http: HttpClient) { }

  public getAgents():Observable<IAgent[]>{
    return this.http.get<IAgent[]>('/agent/getAgenti');
  }

  public addAgent(agent):Observable<any>{
  	console.log(agent);
  	return this.http.post<any>('/agent/dodajAgenta',agent);
  }

}
