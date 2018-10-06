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

  private _toggleSidebar() {
    this._opened = !this._opened;
  }

  constructor( public sidebarService: SidebarService ) { }

  ngOnInit() {
  }

}
