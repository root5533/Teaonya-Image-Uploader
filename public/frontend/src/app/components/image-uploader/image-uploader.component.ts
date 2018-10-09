import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent implements OnInit {

  uploader: FileUploader;
  url = 'http://localhost:3000/upload-image';
  label = 'Choose File';
  formName: string;
  formTag: string;
  formDesc: string;

  constructor() { }

  ngOnInit() {
    this.uploader = new FileUploader({url: this.url, itemAlias: 'photo'});
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('name', this.formName);
      form.append('tag', this.formTag);
      form.append('description', this.formDesc);
    };
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log(response);
    };

  }

  clearForm() {
    this.formName = '';
    this.formDesc = '';
    this.formTag = '';
    this.uploader.clearQueue();
  }

  uploadImage() {
    this.uploader.queue[0].upload();
  }
}
