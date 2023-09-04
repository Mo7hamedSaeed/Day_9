import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  apiKey = 'bcd1576eb8d8a1ac65436241e7de0636';
  //https://api.themoviedb.org/3/tv/popular?api_key=bcd1576eb8d8a1ac65436241e7de0636

  language:string = 'en-US';

  constructor(private http:HttpClient) { }

  getallTV(pageSize:number = 1):Observable<any>
  {
    return this.http.get(`https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}&language=${this.language}&page=${pageSize}`);
  }

  getTVById(movieID:number):Observable<any>
  {
    return this.http.get(`https://api.themoviedb.org/3/tv/${movieID}?api_key=${this.apiKey}&language=${this.language}`);
  }

  searchAllTV(TVName:string,pageSize:number = 1):Observable<any>
  {
    if(TVName == '')
    {
      return this.getallTV();
    }
    else
    {
      return this.http.get(`https://api.themoviedb.org/3/search/tv?api_key=${this.apiKey}&query=${TVName}&page=${pageSize}`);
    }
  }

  changeLanguage()
  {
    this.language = this.language == 'en-US' ? 'ar-SA' : 'en-US';
    console.log(this.language);
    return this.language;
  }
}


