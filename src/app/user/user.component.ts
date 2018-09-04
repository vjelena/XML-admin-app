import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

import { IUser } from '../iuser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private users;

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
  	this.userService.getUsers().subscribe(data => this.users = data);
  }

  aktiviraj(user){
  	this.userService.aktiviraj(user).subscribe( data =>{
  		this.userService.getUsers().subscribe(data => this.users=data);
  	})
  }

    blokiraj(user){
  	this.userService.blokiraj(user).subscribe( data =>{
  		this.userService.getUsers().subscribe(data => this.users=data);
  	})
  }


   ukloni(user){
  	this.userService.ukloni(user).subscribe( data =>{
  		this.userService.getUsers().subscribe(data => this.users=data);
  	})
  }

}
