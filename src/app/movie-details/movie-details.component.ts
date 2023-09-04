import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../tv.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit
{

  imagePath: string = 'https://image.tmdb.org/t/p/w500';
  selectedMovie:any;

  constructor (public route:ActivatedRoute, private myMoviesService: MoviesService){}

  ngOnInit():void
  {
    let movieID = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.myMoviesService.getTVById(movieID).subscribe({next:(response)=>{
      this.selectedMovie = response;
    }});
  }
}
