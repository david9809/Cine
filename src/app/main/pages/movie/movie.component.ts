import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  pelicula: any;
  
  constructor(private activatedRouteact: ActivatedRoute, private moviesService: MoviesService) { 
    this.activatedRouteact.params.subscribe(params =>{
      this.pelicula = this.moviesService.getPelicula(params['id']);
    })
  }
  
  ngOnInit(): void {
  }

}
