import { Component } from '@angular/core';
import { MoviesService } from '../tv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent
{
  private searchValue:string = '';
  constructor(private myMoviesService: MoviesService){}

  set setSearchValue(value:string)
  {
    this.searchValue = value;
    this.searchTV(value);
  }

  searchTV(movieName:string)
  {
    this.myMoviesService.searchAllTV(movieName).subscribe({next:(data)=>{
      console.log(data);

    }})
  }
}
