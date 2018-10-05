import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  private _opened = false;

  private _toggleSidebar() {
    this._opened = !this._opened;
  }

  constructor() { }

  ngOnInit() {
  }

}
