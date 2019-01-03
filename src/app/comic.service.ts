import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ComicService {

  constructor(private http: HttpClient) {  }

  getComicByNumber(number: any) {
    return this.http.get('https://xkcd.now.sh/' + number);
  }

}
