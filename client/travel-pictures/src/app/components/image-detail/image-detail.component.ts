import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Image } from 'src/app/object/image';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  constructor(private imageService: ImageService, private route: ActivatedRoute, private location: Location) { }

  image: Image;

  ngOnInit(): void {
    this.getImage();
  }

  getImage(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.imageService.getImage(id)
      .subscribe(image => this.image = image);
  }

  goBack(): void {
    this.location.back();
  }

}
