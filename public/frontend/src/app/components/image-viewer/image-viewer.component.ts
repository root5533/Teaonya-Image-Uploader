import { Component, OnInit } from '@angular/core';
import { IMAGES } from '../../constants/imageFiles';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit {

  images = IMAGES;
  selectedImage: any;

  constructor( public  modalService: NgxSmartModalService, public sidebarService: SidebarService) { }

  ngOnInit() {
  }

  openModal(img: any) {
    this.selectedImage = img;
    this.modalService.getModal('myModal').open();
  }

  deleteImage() {
    console.log('image deleting');
  }

}
