import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ComicService } from 'src/app/comic.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
message: string;
comics: any;
randomNumArray: Array<any> = [];
num: number;
  constructor(private comicService: ComicService, private routes: ActivatedRoute) {}
  ngOnInit() {
  }

  generateRandomNum() {
    const max = 1000;
    const min = 1;
    this.num = Math.floor(Math.random() * (max - min + 1)) + min;
    if (this.randomNumArray.indexOf(this.num) === -1) {
      this.randomNumArray.push(this.num);
      return this.num;
    } else if (this.randomNumArray.length === max) {
      console.log('all are used');
      this.randomNumArray = [];
    } else {
      console.log('this number is already generated once = ' + this.num);
      return this.generateRandomNum();
    }
  }






}
