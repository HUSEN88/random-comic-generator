import { Component, OnInit } from '@angular/core';
import { ComicService } from 'src/app/comic.service';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

comics: any;
randomNumArray: Array<number> = [];
num: number;
  constructor(private comicService: ComicService) {}
  ngOnInit() {}

  generateComic() {
    this.num = Math.floor(Math.random() * 1000);
                if (this.randomNumArray.indexOf(this.num) === -1) {
                    this.randomNumArray.push(this.num);
                    console.log(this.randomNumArray);
                    this.comicService.getComicByNumber(this.num).subscribe(comics => {
                      console.log(comics);
                      this.comics = comics;
                    });
                    if (this.randomNumArray.length === 1000) {
                        this.randomNumArray = [];
                    }
                } else {
                    console.log('this number is already generated once = ' + this.num);
                    this.generateComic();
                }
  }



}
