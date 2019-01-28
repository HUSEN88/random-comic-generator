import { Component, OnInit, ɵConsole } from '@angular/core';
import { ComicService } from 'src/app/comic.service';
import { Subscription } from 'rxjs';
// import { Subscription } from 'rxjs';
import 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-comic-details',
  templateUrl: './comic-details.component.html',
  styleUrls: ['./comic-details.component.css']
})
export class ComicDetailsComponent implements OnInit {
num: string;
error: string;
errorMsg: string;
loading = false;
comics: any;
loadError = false;
sub: Subscription;

  constructor(private comicService: ComicService, private routes: ActivatedRoute) {
   }

  ngOnInit() {
    this.routes.params
      .subscribe(
        (params: Params) => {
          this.num = params['num'];
          this.generateComic(this.num);
        });
  }

  generateComic(num) {
      if ( this.sub ) {
        this.sub.unsubscribe();
      }
      this.loading = true;
      this.sub = this.comicService.getComicByNumber(num).subscribe(comics => {
          this.comics = comics;
          this.loading = false;
          console.log(this.comics.num);
          console.log(comics);
      },
      error => {
        this.loadError = true;
        this.error = error;
        this.loading = false;
        this.errorMsg = 'something went wrong';
      },
      () => {
        console.log('completed');
      }
      );

  }
}



