import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MangasComponent } from './mangas/mangas.component';
import { AddMangaComponent } from './add-manga/add-manga.component';

const routes: Routes = [
  { path: '', redirectTo: '/mangas', pathMatch: 'full' },
  { path: 'mangas', component: MangasComponent },
  { path: 'add-manga', component: AddMangaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
