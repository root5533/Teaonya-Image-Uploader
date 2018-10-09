import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL } from '../constants/api';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private _images: BehaviorSubject<any> = new BehaviorSubject(null);
  public images: Observable<any> = this._images.asObservable();

  toggle = false;
  selectedTag: string;

  constructor(private http: HttpClient) {
    this.selectedTag = 'Home';
  }

  toggleSidebar() {
    this.toggle = !this.toggle;
  }

  updateTag(tag: string) {
    this.selectedTag = tag;
    this.toggleSidebar();
    this.tagChange(tag);
  }

  get getImagesObservable(): any {
    return this.images;
  }

  tagChange(tag: string) {
    this._images.next(tag);
  }

  getTags() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'application/json');
    return this.http.get(URL + '/images/tags', {headers: headers});
  }

}
