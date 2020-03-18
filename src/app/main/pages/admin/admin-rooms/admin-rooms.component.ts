import { Component, OnInit } from '@angular/core';
import { SalasModel } from '../../../../models/salas.model';
import { RestService } from '../../../../services/rest.service';
import { TheaterModel } from '../../../../models/theater.model.';


@Component({
  selector: 'app-admin-rooms',
  templateUrl: './admin-rooms.component.html',
  styleUrls: ['./admin-rooms.component.css']
})
export class AdminRoomsComponent implements OnInit {

  salas: SalasModel[] = [];

  constructor(private _rest: RestService) { }

  ngOnInit(): void {
    this._rest.getAllSalas().subscribe(res => this.salas = res);
  }

}
