import { Component, OnInit } from '@angular/core';
import { HorarioModel } from '../../../../../models/horario.model';
import { SalasModel } from '../../../../../models/salas.model';
import { RestService } from '../../../../../services/rest.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { peliculasModel } from '../../../../../models/peliculas.model';
import { MoviesService } from '../../../../../services/movies.service';
import { reservaModel } from '../../../../../models/reserva.model';

@Component({
  selector: 'app-new-admin-hour',
  templateUrl: './new-admin-hour.component.html',
  styleUrls: ['./new-admin-hour.component.css']
})
export class NewAdminHourComponent implements OnInit {

  error = false;
  horario: HorarioModel = new HorarioModel();
  reserva: reservaModel = new reservaModel();
  id = "";

  sala: SalasModel[] = [];
  sala2: SalasModel = new SalasModel();
  peliculas: any;
  peliculaSeleccionada: peliculasModel;

  selectedItem: string;

  constructor(private _rest: RestService, private _activatedRoute: ActivatedRoute, private _movies: MoviesService) { }

  ngOnInit(): void {

    const id = this._activatedRoute.snapshot.paramMap.get('id');
    this.id = id;

    if( id != 'nuevo'){
      this._rest.getHorario(id).subscribe( (res : HorarioModel) =>{
          this.horario = res;
          this.horario.id_horario = id;
      });
    }

    if( id == 'nuevo'){
      this.horario.id_horario = "";
    }

    // Esto carga las cosas
    this._rest.getAllSalas().subscribe(rest => this.sala = rest);
    this.peliculas = this._movies.getPeliculas();

  }

  guardar(form: NgForm){

    this.horario.sala = this.sala2;
    this.horario.pelicula = this.peliculaSeleccionada;

    if(form.invalid ){
      this.error = true;
      return;
    }

    Swal.fire({
      title: 'Espere',
      icon: 'info',
      text: 'Guardando información',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<any>;
  
    if(this.horario.id_horario){
      //this.error = false;
      //peticion = this._rest.putHorario(this.horario); // NO SE PUEDE ACTUALIZAR 
    } else {
      this.error = false;
      peticion = this._rest.PostHorario(this.horario);
      for (let index = 0; index < 20; index++) {
        this.reserva.estado = "Disponible";
        this.reserva.horario = this.horario;
        this.reserva.silla_tipo = "Preferencial";
        this.reserva.silla = `SILLA-P${index}`
        this._rest.PostReserva(this.reserva).subscribe( res =>{
        });
      }
      for (let index = 0; index < 40; index++) {
        this.reserva.estado = "Disponible";
        this.reserva.horario = this.horario;
        this.reserva.silla_tipo = "General";
        this.reserva.silla = `SILLA-G${index}`
        this._rest.PostReserva(this.reserva).subscribe( res =>{
        });
      }
    }

    peticion.subscribe(resp =>{
      Swal.fire({
        title: this.horario.pelicula.title + " - " + this.horario.hora,
        icon: 'success',
        text: 'Se actualizo Correctamente',
      });
    });

  }

  selectSala(id_sala: any){
    // Peticion al servicio
    this._rest.getSala(id_sala.target.value).subscribe( ( rest: SalasModel ) => {this.sala2 = rest} );
  }

  selectPelicula(id_pelicula: any){
    // Peticion al servicio
    this.peliculaSeleccionada = this._movies.getPelicula(id_pelicula.target.value);
  }

}
  
