import { Component, OnInit } from '@angular/core';
import { Manga } from '../entity/manga';
import { MangaService } from '../service/manga.service';

@Component({
  selector: 'app-mangas',
  templateUrl: './mangas.component.html',
  styleUrls: ['./mangas.component.css']
})
export class MangasComponent implements OnInit {

  mangaComponent = "Manga component";

  mangas: Manga[]= [];

  constructor(private mangaService: MangaService) { }

  ngOnInit(): void {
    this.getMangas();
  }

  getMangas(): void {
    this.mangaService.getMangas()
    .subscribe(mangas => this.mangas = mangas);
  }

}