import {Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import {Image} from "../models/image.model";
import {DialogService} from "ng2-bootstrap-modal";

@Component({
  selector: 'image',
  templateUrl: 'image.component.html',
  styleUrls: ['image.component.css']
})
export class ImageComponent {


  @Input()
  private data: Image;


  constructor(private dialogService:DialogService) {

  }


}

