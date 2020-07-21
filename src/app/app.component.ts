import { User } from './user/user.model';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  isCollapsed: boolean = true;

  constructor(private http: HttpClient) {
    this.user = new User(); 
    this.user.name = "admin";
    this.user.designation = "Software Programmer";
    this.user.address = "#A5-201, Elita Promenade, J P Nagar 7th Phase, Bangalore - 560070";
    this.user.phone = ["9731033370"];
  }

  ngOnInit(): void {
    let obs = this.http.get('https://api.github.com/users/drbhagwat');
    obs.subscribe((response) => console.log(response));
  }
}
