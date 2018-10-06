import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  toggle = false;
  selectedTag: string;

  constructor() {
    this.selectedTag = 'home';
  }

  toggleSidebar() {
    this.toggle = !this.toggle;
  }

  updateTag(tag: string) {
    this.selectedTag = tag;
    this.toggleSidebar();
  }

}
