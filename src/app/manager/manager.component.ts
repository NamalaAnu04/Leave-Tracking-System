import { Component,OnInit } from '@angular/core';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
})
export class ManagerComponent implements OnInit {
  signupObj: any = {
    fname: '',
    lname: '',
    email: '',
    password: '',
  };
  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('loginUser') || '{}');
    if (user.fname) {
      this.signupObj = user;
    }
  }
  logout() {
    localStorage.removeItem('loginUser');
  }
}
