import { Component, OnInit } from '@angular/core';
import { ExtraServiceService } from '../extra-service.service';

import { IExtra } from '../iextra';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.css']
})
export class ExtraComponent implements OnInit {

	private extras;

  private e;

  constructor(private extraService: ExtraServiceService) { }

  ngOnInit() {
  	this.extraService.getExtras().subscribe(data => this.extras=data);
  }

  dodajDodatak(ime){
  		var extra:IExtra = {
  			name: ime
  		}

  		this.extraService.addExtra(extra).subscribe(data => {
  			this.extraService.getExtras().subscribe(data => this.extras=data);
  		})

  }

  obrisi(extra){
  	this.extraService.deleteExtra(extra).subscribe( data =>{
  		this.extraService.getExtras().subscribe(data => this.extras=data);
  	})
  }

  sacuvaj(extra){
    console.log(extra)
    this.e=extra;
    console.log(this.e)
  }

  izmeniDodatak(ime){
    console.log(this.e.id)
    this.extraService.editExtra(this.e.id, ime).subscribe( data =>{
      this.extraService.getExtras().subscribe(data => this.extras=data);
    })
  }

}
