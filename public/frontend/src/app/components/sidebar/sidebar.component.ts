import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  private _opened = false;
  mobile = false;
  sidebarToggle = true;
  tags: [];

  private _toggleSidebar() {
    this._opened = !this._opened;
  }

  constructor( public sidebarService: SidebarService ) { }

  ngOnInit() {
    this.sidebarService.getTags().subscribe((tags) => {
      if (tags) {
        this.tags = tags['tags'];
        // console.log(this.tags);
      }
    });
  }

}
