import {Component, OnInit} from '@angular/core';
import {Image} from "./models/image.model";
import {ImageService} from "./services/images.service";

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  imgs: Image[];

  constructor(private imagesService: ImageService) {}

  ngOnInit(): void {
    this.imagesService.load().subscribe((res: Image[]) => {
      this.imgs = res;
    }, (err) => {
      alert(`Error While Fetchig Books From Server.`);
      console.error(err);
    });
  }

}
