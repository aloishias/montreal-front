import { Component, OnInit } from '@angular/core';
import { MangaService } from '../service/manga.service';
import { Manga } from '../entity/manga';



@Component({
  selector: 'app-add-manga',
  templateUrl: './add-manga.component.html',
  styleUrls: ['./add-manga.component.css']
})
export class AddMangaComponent implements OnInit {

  manga = <Manga>{};
  

  constructor(private mangaService : MangaService) { }

  ngOnInit(): void {
  }

  add(mangaName: string, mangaNumber: number, mangaImageLink: string): void {
    if (!mangaName || !mangaNumber || !mangaImageLink) { return; }
    this.manga.mangaNumber = mangaNumber;
    this.manga.mangaTitle = mangaName;
    this.manga.mangaImageLink = mangaImageLink;

    this.mangaService.addManga(this.manga);
  }

}
