import { Component, OnInit } from '@angular/core';
import { ComicService } from 'src/app/comic.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-comic-details',
  templateUrl: './comic-details.component.html',
  styleUrls: ['./comic-details.component.css']
})
export class ComicDetailsComponent implements OnInit {
num: number;
errorMsg: string;
loading = false;
  comics: any;
  // loader = false;
  constructor(private comicService: ComicService, private routes: ActivatedRoute) {
   }

  ngOnInit() {
    this.routes.params
      .subscribe(
        (params: Params) => {
          this.num = params['num'];
            this.generateComic(this.num);
        }
      );
  }


  generateComic(num) {
    this.loading = true;
    this.comicService.getComicByNumber(num).subscribe(comics => {
      console.log(comics);
      this.comics = comics;
      this.loading = false;
      console.log(this.comics.num);
      });
  }

}

