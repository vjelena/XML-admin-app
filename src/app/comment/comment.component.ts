import { Component, OnInit } from '@angular/core';
import { CommentServiceService } from '../comment-service.service';

import { IComment } from '../icomment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

	private comments;

  constructor(private commentService: CommentServiceService) { }

  ngOnInit() {
  	this.commentService.getComments().subscribe(data => this.comments = data);
  }

  odobri(comm){
  	this.commentService.odobri(comm).subscribe( data =>{
  		this.commentService.getComments().subscribe(data => this.comments = data);
  	})
  }

}
