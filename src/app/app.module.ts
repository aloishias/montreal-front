import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MangasComponent } from './mangas/mangas.component';
import { AddMangaComponent } from './add-manga/add-manga.component';
import { MangaDetailsComponent } from './manga-details/manga-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MangasComponent,
    AddMangaComponent,
    MangaDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
