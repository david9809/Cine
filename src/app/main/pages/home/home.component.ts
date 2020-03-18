import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { peliculasModel } from 'src/app/models/peliculas.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards: any;
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.cards = this.moviesService.getPeliculas();
  }



}
