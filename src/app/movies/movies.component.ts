import { Component, OnInit } from '@angular/core';
import { CommonService } from '../_service/commonService';
import { appConfig } from '../_service/app.config';
import { Movie } from '../model/movie.model';

export class PageState {
  currentPage: number;
  pageSize: number;
  totalItems?: number;
  numberOfPages?: number;
}

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [CommonService]
})
export class MoviesComponent implements OnInit {

  movies: Movie[];
  p: number = 1;
  

  constructor(
    private commonService : CommonService
  ) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(){
    this.movies = this.commonService.get();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(currentUser);
    // this.commonService.get(appConfig.apiUrl + appConfig.getMovieListing).subscribe(
    //   data =>{
    //     console.log(data);
    //   }, error => {
    //     console.log(error);
    //   });
  }

  pageChange(pageState: PageState) {
    console.log('Page changed. Reload data with new paging values');
    // do whatever you need here
  }

  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key){
    console.log(key)
    this.key = key;
    this.reverse = !this.reverse;
  }



}
