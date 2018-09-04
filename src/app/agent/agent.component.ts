import { Component, OnInit } from '@angular/core';
import { AgentServiceService } from '../agent-service.service';

import { IAgent } from '../iagent';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {

  private agents;

  constructor(private agentService: AgentServiceService) { }

  ngOnInit() {
  	this.agentService.getAgents().subscribe(data => this.agents=data);
  }


  dodajAgenta(ime,prezime,adresa,mbr,username,password){
  		var agent:IAgent = {
  			name: ime,
  			lastName: prezime,
  			address: adresa,
  			number: mbr,
  			username: username,
  			password: password
  		}


  		this.agentService.addAgent(agent).subscribe(data => {
  			this.agentService.getAgents().subscribe(data => this.agents=data);
  		})

  }

}
