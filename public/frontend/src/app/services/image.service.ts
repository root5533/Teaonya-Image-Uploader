import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL } from '../constants/api';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  getRecentUploads() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'application/json');
    return this.http.get(URL + '/images/recent', {headers: headers});
  }

  getTagUploads(tag) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'application/json');
    return this.http.get(URL + '/images/tag/' + tag, {headers: headers});
  }

}
