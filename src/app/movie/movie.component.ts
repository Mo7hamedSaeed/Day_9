import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../tv.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit{
  imagePath: string = 'https://image.tmdb.org/t/p/w500';
  allMovies!:any[];
  private searchValue:string = '';
  language : string = 'en-Us';
  totalTV! : number;
  pageSize : number = 20;
  currentPage:number = 1;

  constructor(private myMoviesService: MoviesService){}

  ngOnInit(): void
  {
    this.myMoviesService.getallTV(this.currentPage).subscribe({next:(response)=>
    {
      this.allMovies = response.results;
      this.totalTV=response.total_results;
    }});
  }


  set setSearchValue(value:string)
  {
    this.searchValue = value;
    this.searchTV(value);
  }

  searchTV(movieName:string,)
  {
    this.myMoviesService.searchAllTV(movieName,this.currentPage).subscribe({next:(data)=>{
      this.allMovies=data.results;

    }})
  }

  changeLanguage()
  {
    this.language = this.myMoviesService.changeLanguage()
    this.myMoviesService.getallTV().subscribe({
      next:(response)=>{
        this.allMovies = response.results;
      }});
  }

  changePage(pageInfo:PageEvent)
  {
    this.currentPage = pageInfo.pageIndex+1;
    this.myMoviesService.getallTV(this.currentPage).subscribe({next:(response)=>
      {
        this.allMovies = response.results;
        this.totalTV=response.total_results;
      }});
  }
}
