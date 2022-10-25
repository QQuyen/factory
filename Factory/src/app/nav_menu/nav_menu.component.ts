import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav_menu',
  templateUrl: './nav_menu.component.html',
  styleUrls: ['./nav_menu.component.css']
})
export class Nav_menuComponent implements OnInit {

  nav_menu = ['Home', 'About', 'Services', 'Blog', 'Project', 'Shop', 'Contact'];
  constructor() { }

  ngOnInit() {
  }

}
