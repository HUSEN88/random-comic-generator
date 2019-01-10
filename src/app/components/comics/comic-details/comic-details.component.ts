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
error: string;
errorMsg:string;
loading = false;
  comics: any;
  loadError = false;
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
      },
      error => {
        this.loadError = true;
        this.error = error;
        this.loading = false;
        this.errorMsg = 'something went wrong';
      });
  }

}

