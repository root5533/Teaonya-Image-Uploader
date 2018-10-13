import { Component, OnInit } from '@angular/core';
import { IMAGES } from '../../constants/imageFiles';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { SidebarService } from '../../services/sidebar.service';
import { ImageService } from '../../services/image.service';
import { URL } from '../../constants/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit {

  images: any;
  selectedImage: any;
  recents: any;
  url = URL;
  _selectedTag: Observable<any>;

  constructor( public  modalService: NgxSmartModalService, public sidebarService: SidebarService, private imageService: ImageService) { }

  ngOnInit() {
    this._selectedTag = this.sidebarService.getImagesObservable;
    this.imageService.getRecentUploads().subscribe((res) => {
      if (res['images']) {
        this.recents = res['images'];
        this.images = res['images'];
      }
    });
    this._selectedTag.subscribe((tag) => {
      // console.log(tag);
      if (tag !== null) {
        if ( tag === 'Home') {
          this.imageService.getRecentUploads().subscribe((res) => {
            if (res['images']) {
              this.recents = res['images'];
              this.images = res['images'];
            }
          });
        } else {
          this.imageService.getTagUploads(tag).subscribe((res) => {
            // console.log(res['images']);
            if (res['images']) {
              this.images = res['images'];
              // console.log(this.images);
            }
          });
        }
      }
    });
  }

  openModal(img: any) {
    this.selectedImage = img;
    this.modalService.getModal('myModal').open();
  }

  // deleteImage() {
  //   console.log('image deleting');
  // }

}
