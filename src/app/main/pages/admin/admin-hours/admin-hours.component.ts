import { Component, OnInit } from '@angular/core';
import { RestService } from '../../../../services/rest.service';
import { HorarioModel } from '../../../../models/horario.model';
import { TheaterModel } from '../../../../models/theater.model.';


@Component({
  selector: 'app-admin-hours',
  templateUrl: './admin-hours.component.html',
  styleUrls: ['./admin-hours.component.css']
})
export class AdminHoursComponent implements OnInit {

  horarios: HorarioModel[] = [];

  constructor(private _rest: RestService) { }

  ngOnInit(): void {
    this._rest.getAllHorarios().subscribe( res => this.horarios = res );
  }

}
