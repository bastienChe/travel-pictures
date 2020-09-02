import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageListComponent } from './components/image-list/image-list.component';
import { ImageDetailComponent } from './components/image-detail/image-detail.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '',  redirectTo: '/images', pathMatch: 'full'},
  { path: 'images', component: ImageListComponent },
  { path: 'image/:id', component: ImageDetailComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
