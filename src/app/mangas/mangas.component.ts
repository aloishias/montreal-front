import { Component, OnInit } from '@angular/core';
import { Manga } from '../entity/manga';
import { MANGAS } from '../entity/mock-mangas';

@Component({
  selector: 'app-mangas',
  templateUrl: './mangas.component.html',
  styleUrls: ['./mangas.component.css']
})
export class MangasComponent implements OnInit {

  mangaComponent = "Manga component";

  mangas = MANGAS;

  constructor() { }

  ngOnInit(): void {
  }

}