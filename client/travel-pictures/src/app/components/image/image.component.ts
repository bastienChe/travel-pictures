import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { Image } from 'src/app/object/image';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  constructor(private imageService: ImageService) {  }

  images: Image[];

  ngOnInit(): void {

    this.getImages();

  }

  getImages(): void{
    this.imageService.getImages()
    .subscribe(images => this.images = images);
  }

}
