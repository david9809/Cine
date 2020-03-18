import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { reservaModel } from '../models/reserva.model';
import { map} from 'rxjs/operators';
import { TheaterModel } from '../models/theater.model.';
import { SalasModel } from '../models/salas.model';
import { HorarioModel } from '../models/horario.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private url = "https://cineapp-6a566.firebaseio.com"

  constructor(private _http: HttpClient) { }

  PostTeatro(teatro : TheaterModel){
    return this._http.post(`${ this.url }/teatro.json`, teatro).pipe(
      map( (resp: any) => {
        console.log(resp);
        teatro.id_teatro = resp.name;
        return teatro;
      })
    );
  }

  PostReserva(reserva : reservaModel){
    return this._http.post(`${ this.url }/reservas.json`, reserva).pipe(
      map( (resp: any) => {
        reserva.id_reserva = resp.name;
        return reserva;
      })
    );
  }

  PostSala(sala: SalasModel){
    return this._http.post(`${ this.url }/salas.json`, sala).pipe(
      map ( (resp: any) => {
        sala.id_sala = resp.name;
        return sala;
      } )
    );
  }

  PostHorario(horario: HorarioModel){
    return this._http.post(`${ this.url }/horarios.json`, horario).pipe(
      map ( (resp: any) => {
        horario.id_horario = resp.name;
        return horario;
      } )
    );
  }

  PutTeatro(teatro : TheaterModel){
    const teatroTemp = {
      ...teatro
    };
    delete teatroTemp.id_teatro;
    return this._http.put(`${ this.url }/teatro/${ teatro.id_teatro }.json`, teatroTemp);
  }

  PutReserva(reserva : reservaModel){
    const reservaTemp = {
      ...reserva
    };
    delete reservaTemp.id_reserva;
    return this._http.put(`${ this.url }/reservas/${ reserva.id_reserva }.json`, reservaTemp);
  }

  PutSala(sala: SalasModel){
    const salaTemp = {
      ...sala
    };
    delete salaTemp.id_sala;
    return this._http.put(`${ this.url }/salas/${ sala.id_sala }.json`, salaTemp);
  }

  putHorario(horario: HorarioModel){
    const horarioTemp = {
      ...horario
    };
    delete horarioTemp.id_horario;
    return this._http.put(`${ this.url }/horarios/${ horario.id_horario }.json`, horarioTemp);
  }

  getAllTeatros(){
    return this._http.get(`${ this.url }/teatro.json`).pipe(
      map( this.crearArregloTeatro ));
  }

  getTeatro(id: string){
    return this._http.get(`${ this.url }/teatro/${ id }.json`);
  }

  getAllReservas(){
    return this._http.get(`${ this.url }/reservas.json`).pipe(
      map( this.crearArregloReserva ));
  }

  getReserva(id: string){
    return this._http.get(`${ this.url }/reservas/${ id }.json`);
  }

  getAllReservas2(nombre_pelicula, fecha){
    return this._http.get(`${ this.url }/reservas.json`).pipe(
      map( res => this.crearArregloReserva2(res, nombre_pelicula, String(fecha))));
  }

  getReserva2(id: string){
    return this._http.get(`${ this.url }/reservas/${ id }.json`);
  }

  getAllSalas(){
    return this._http.get(`${ this.url }/salas.json`).pipe(
  map ( this.crearArregloSalas ))
  }

  getSala(id: string){
    return this._http.get(`${ this.url }/salas/${ id }.json`);
  }

  getAllHorarios(){
    return this._http.get(`${ this.url }/horarios.json`).pipe(
    map ( this.crearArregloHorarios ))
  }

  getHorario(id: string){
    return this._http.get(`${ this.url }/horarios/${ id }.json`);
  }

  private crearArregloReserva(reserva: object){
    const reservas: reservaModel[] = [];
    if( reserva === null){
      return [];
    }
    Object.keys(reserva).forEach( key => {
      const reserva2: reservaModel = reserva[key];
      reserva2.id_reserva = key;
      reservas.push(reserva2);
    });
    return reservas;
  }

  private crearArregloReserva2(reserva: object, nombre_pelicula, fecha){
    const reservas: reservaModel[] = [];
    if( reserva === null){
      return [];
    }
    Object.keys(reserva).forEach( key => {
      const reserva2: reservaModel = reserva[key];
      reserva2.id_reserva = key;
      reservas.push(reserva2);
    });
    const resultPosts = [];
    for (const post of reservas) {
      if (post.horario.pelicula.title.toLowerCase().indexOf(nombre_pelicula.toLowerCase()) > -1) {
        if (post.horario.fecha.toLowerCase().indexOf(fecha.toLowerCase()) > -1) {
          resultPosts.push(post);
        }
      };
    };
    return resultPosts;
  }

  private crearArregloTeatro( teatro: object){
    const teatros: TheaterModel[] = [];
    if( teatro === null){
      return [];
    }
    Object.keys(teatro).forEach( key => {
      const teatro2: TheaterModel = teatro[key];
      teatro2.id_teatro = key;
      teatros.push(teatro2);
    });
    return teatros;
  }

  private crearArregloSalas( sala: object ){
    const salas: SalasModel[] = [];
    if (sala === null){
      return [];
    }
    Object.keys(sala).forEach(key => {
      const sala2: SalasModel = sala[key];
      sala2.id_sala = key;
      salas.push(sala2);
    });
    return salas;
  }

  private crearArregloHorarios( horario: object ){
    const horarios: HorarioModel[] = [];
    if (horario === null){
      return [];
    }
    Object.keys(horario).forEach(key => {
      const horario2: HorarioModel = horario[key];
      horario2.id_horario = key;
      horarios.push(horario2);
    });
    return horarios;
  }
}
