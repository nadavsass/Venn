import {Image} from "../models/image.model";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'


@Injectable()
export class ImageService {

  public imgs: Image[];

  constructor(private http: Http) {

  }

  public add(img: Image) {
    this.imgs.push(img);
  }


  public get() {
    return this.imgs;
  }

  public load() : Observable<Image[]> {
    return this.http.get('http://localhost:3000').map(res=> res.json()).do((imgs) => {
      this.imgs = imgs;
      return imgs;
    });
  }

}
