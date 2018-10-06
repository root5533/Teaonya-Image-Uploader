import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent implements OnInit {

  uploader: FileUploader;
  url = 'http://localhost:3000/';
  label = 'Choose File';

  constructor() { }

  ngOnInit() {
    this.uploader = new FileUploader({url: this.url, itemAlias: 'photo'});
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUploaded: uploaded: ', item, status, response);
    };
  }

}
