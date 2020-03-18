import { Component, OnInit } from '@angular/core';
import { TheaterModel } from 'src/app/models/theater.model.';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-admin-theater',
  templateUrl: './admin-theater.component.html',
  styleUrls: ['./admin-theater.component.css']
})
export class AdminTheaterComponent implements OnInit {

  teatros : TheaterModel[] = [];

  constructor(private _rest: RestService) { }

  ngOnInit(): void {
    this._rest.getAllTeatros().subscribe(res => this.teatros = res);
  }


}
