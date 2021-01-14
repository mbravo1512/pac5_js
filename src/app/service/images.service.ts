import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core';
import { Image } from '../models/image.interface'

@Injectable({
  providedIn: 'root'
})


export class ImagesService {

  constructor(private http:HttpClient) { }

  getAllImages(): Observable<Image[]>{
    return this.http.get<Image[]>('https://picsum.photos/v2/list');
  }
  getImagesById(id: String): Observable<Image[]>{
    return this.http.get<Image[]>('https://picsum.photos/id/'+id+'/info');
  }
}
