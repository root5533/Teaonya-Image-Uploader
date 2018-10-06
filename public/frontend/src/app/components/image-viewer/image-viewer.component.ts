import { Component, OnInit } from '@angular/core';
import { IMAGES } from '../../constants/imageFiles';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit {

  images = IMAGES;
  selectedImage: any;

  constructor( public  modalService: NgxSmartModalService) { }

  ngOnInit() {
  }

  openModal(img: any) {
    this.selectedImage = img;
    this.modalService.getModal('myModal').open();
  }

}
