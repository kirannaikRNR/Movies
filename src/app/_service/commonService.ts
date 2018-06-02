import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { Movie } from '../model/movie.model';

@Injectable()
export class CommonService {
    constructor(private http: HttpClient) { }

    get() {
      return [{
          "id": "dealpool_12121212",
          "name": "DeadPool",
          "rating": 4,
          "date": new Date(),
          "img": "https://sms-spanish.com/wp-content/uploads/2017/04/cinema.jpg",
          "hero": "kiran"
      },{
          "id": "dealpool_12121212",
          "name": "APool",
          "rating": 2,
          "date": new Date(),
          "img": "https://sms-spanish.com/wp-content/uploads/2017/04/cinema.jpg",
            "hero": "kiran"
      },{
          "id": "dealpool_12121212",
          "name": "BPool",
          "rating": 4,
          "date": new Date(),
          "img": "https://sms-spanish.com/wp-content/uploads/2017/04/cinema.jpg",
            "hero": "kiran"
      },{
          "id": "dealpool_12121212",
          "name": "CPool",
          "rating": 3,
          "date": new Date(),
          "img": "https://sms-spanish.com/wp-content/uploads/2017/04/cinema.jpg",
            "hero": "kiran"

      },{
          "id": "dealpool_12121212",
          "name": "EPool",
          "rating": 5,
          "date": new Date(),
        "img": "https://sms-spanish.com/wp-content/uploads/2017/04/cinema.jpg",
            "hero": "kiran"
      },{
          "id": "dealpool_12121212",
          "name": "FPool",
          "rating": 1,
          "date": new Date(),
          "img": "https://sms-spanish.com/wp-content/uploads/2017/04/cinema.jpg",
            "hero": "kiran"
      },{
          "id": "dealpool_12121212",
          "name": "GPool",
          "rating": 4,
          "date": new Date(),
          "img": "https://i.pinimg.com/originals/9e/96/9b/9e969b4cb93c422fbbb23f97aa4ba4e4.jpg",
            "hero": "kiran"
      },{
          "id": "dealpool_12121212",
          "name": "HPool",
          "rating": 4,
          "date": new Date(),
          "img": "https://i.pinimg.com/originals/9e/96/9b/9e969b4cb93c422fbbb23f97aa4ba4e4.jpg",
            "hero": "kiran"
      },{
          "id": "dealpool_12121212",
          "name": "IPool",
          "rating": 3,
          "date": new Date(),
          "img": "https://i.pinimg.com/originals/9e/96/9b/9e969b4cb93c422fbbb23f97aa4ba4e4.jpg",
            "hero": "kiran"
      },{
          "id": "dealpool_12121212",
          "name": "JPool",
          "rating": 4,
          "date": new Date(),
          "img": "https://i.pinimg.com/originals/9e/96/9b/9e969b4cb93c422fbbb23f97aa4ba4e4.jpg",
            "hero": "kiran"
      }];
      // return this.http.get<Movie[]>(url).map(response => {
      //     return response;
      // });
    }

    post(url: string, body: any){
      return this.http.post(url, body);
    }
}
