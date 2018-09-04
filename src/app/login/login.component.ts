import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';

import { IAdmin } from '../iadmin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	private a;

  constructor(private loginService: LoginServiceService) { }

  ngOnInit() {
  }

  prijava(username, password){
  		var admin:IAdmin = {
  			username: username,
  			password: password
  		}

  		this.loginService.prijava(admin).subscribe(data => this.a=data);

  }

}
