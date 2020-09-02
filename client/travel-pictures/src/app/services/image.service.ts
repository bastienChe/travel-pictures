import { Injectable } from '@angular/core';
import { Images } from '../../mocks/image-mock';
import { Image } from '../object/image';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  getImages(): Observable<Image[]>{
    return of(Images);
  }

}
