import { Component, OnInit } from '@angular/core';
import { IMAGES } from '../../constants/imageFiles';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit {

  images = IMAGES;

  constructor() { }

  ngOnInit() {
  }

}
