import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageListComponent } from './components/image-list/image-list.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'images', component: ImageListComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
