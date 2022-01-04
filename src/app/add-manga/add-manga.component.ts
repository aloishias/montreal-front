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
  mangas: Manga[] = [];
  

  constructor(private mangaService : MangaService) { }

  ngOnInit(): void {
  }

  add(mangaName: string, mangaNumber: string, mangaAuthor: string, mangaImageLink: string): void {
    console.log("Tu passes par là");
    if (!mangaName || !mangaNumber || !mangaAuthor || !mangaImageLink) { 
      console.log("Pas de manga name");
      return; 
    }
    
    this.manga.mangaNumber = mangaNumber;
    this.manga.mangaTitle = mangaName;
    this.manga.mangaImageLink = mangaImageLink;
    this.manga.accountId = 1;
    this.manga.mangaAuthor = mangaAuthor;

    this.mangaService.addManga(this.manga)
    .subscribe(manga => {
      this.mangas.push(manga)
    });
  }

}
