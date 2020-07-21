import { User } from './user.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input('user') user: User;
  isCollapsed: boolean = true;


  constructor() {
  }

  ngOnInit(): void {
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
