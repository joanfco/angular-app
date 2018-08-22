import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: '../menu/menu.component.html',
  styleUrls: ['../menu/menu.component.css']
})
export class MenuComponent implements OnInit {
  title = 'este es el titulo del menu'
  constructor() { }

  ngOnInit() {
  }

}
