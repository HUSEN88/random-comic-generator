import { Component, OnInit } from '@angular/core';
import { ComicService } from 'src/app/comic.service';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

comics: any;
num = 1;
constructor(private comicService: ComicService) {

}
ngOnInit() {
}

generateComic() {
  let randomNumber = Math.random()*1000;
  this.num = Math.floor(randomNumber);
  this.comicService.getComicByNumber(this.num).subscribe(comics => {
    console.log(comics);
    this.comics = comics;
    console.log(this.comics);
  });
}



}
