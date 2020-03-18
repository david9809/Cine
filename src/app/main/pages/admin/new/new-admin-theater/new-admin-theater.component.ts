import { Component, OnInit } from '@angular/core';
import { TheaterModel } from 'src/app/models/theater.model.';
import { RestService } from 'src/app/services/rest.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-admin-theater',
  templateUrl: './new-admin-theater.component.html',
  styleUrls: ['./new-admin-theater.component.css']
})
export class NewAdminTheaterComponent implements OnInit {

  error = false;
  teatro: TheaterModel = new TheaterModel();
  id = "";

  constructor(private _rest : RestService, private _activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    const id = this._activatedRoute.snapshot.paramMap.get('id');
    this.id = id;

    if( id != 'nuevo'){
      this._rest.getTeatro(id).subscribe( (res : TheaterModel) =>{
          this.teatro = res;
          this.teatro.id_teatro = id;
      });
    }
    if( id == 'nuevo'){
      this.teatro.id_teatro = "";
    }

  }

  guardar(form: NgForm){
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
    
      if( this.teatro.id_teatro){
        this.error = false;
        peticion = this._rest.PutTeatro(this.teatro);
      }else{
        this.error = false;
        peticion = this._rest.PostTeatro(this.teatro);
      }

      peticion.subscribe(resp =>{
        Swal.fire({
          title: this.teatro.nombre,
          icon: 'success',
          text: 'Se actualizo Correctamente',
        });
      });
      
  }


}
