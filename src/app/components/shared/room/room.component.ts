import { Component, OnInit } from '@angular/core';
import { reservaModel } from '../../../models/reserva.model';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../../../services/rest.service';
import { MoviesService } from '../../../services/movies.service';
import * as moment from 'moment';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  oculta = true;
  
  pelicula: any;
  reserva = [];
  fecha: any;

  today = moment();
  man = moment(this.today).add(1, 'days');
  man_1 = moment(this.today).add(2, 'days');
  man_2 = moment(this.today).add(3, 'days');
  man_3 = moment(this.today).add(4, 'days');

  reservas: reservaModel[] = [];

  constructor(private activatedRoute: ActivatedRoute, private _rest : RestService, private moviesService: MoviesService) { 
    this.activatedRoute.params.subscribe(params =>{
      this.pelicula = this.moviesService.getPelicula(params['id']);
    });
    
  }

  ngOnInit(): void {
  
  }

  selectFecha(fecha){
    this.fecha = fecha.format('YYYY-MM-DD');
    this._rest.getAllReservas2(this.pelicula.title, this.fecha).subscribe(rest => this.reservas = rest);
  }

  save(silla){
    this.reserva.push(silla);
    console.log(this.reserva)
  }

  guardar(reserva){
  }
}
