import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  private _opened = false;
  mobile = false;
  sidebarToggle = true;
  tags: any;
  _selectedTag: Observable<any>;

  private _toggleSidebar() {
    this._opened = !this._opened;
  }

  constructor( public sidebarService: SidebarService ) { }

  ngOnInit() {
    this._selectedTag = this.sidebarService.getImagesObservable;
    this.sidebarService.getTags().subscribe((tags) => {
      if (tags) {
        this.tags = tags['tags'];
        // console.log(this.tags);
      }
    });
    this._selectedTag.subscribe((tag) => {
      if (tag === 'Home') {
        this.sidebarService.getTags().subscribe((tags) => {
          this.tags = tags['tags'];
        });
      }
    });
  }

}
