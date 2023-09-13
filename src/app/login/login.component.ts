import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  errorMessage: string = ''; 
  signupMessage:string='';
  isLoginView: boolean = true;
  toggleView() {
    this.isLoginView = !this.isLoginView;
  }
  constructor(private router: Router) {}
  users: any[] = [];
  signupObj: any = {
    fname: '',
    lname: '',
    email: '',
    password: '',
  };
  loginObj: any = {
    email: '',
    password: '',
  };
  signUp() {
    if (
      this.signupObj.email.trim() !== '' &&
      this.signupObj.password.trim() !== '' &&
      this.signupObj.fname.trim() !== ''
    ) {
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
      existingUsers.push(this.signupObj);
      localStorage.setItem('users', JSON.stringify(existingUsers));
      this.signupObj = {
        role: '',
        fname: '',
        lname: '',
        email: '',
        password: '',
      };
      this.isLoginView=true;
    }
  }
  login() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const matchingUser = users.find(
      (user: { email: string }) => user.email === this.loginObj.email
    );

    if (matchingUser && matchingUser.password === this.loginObj.password) {
      if (matchingUser.email === 'manager@edtex.in') {
        localStorage.setItem('loginUser', JSON.stringify(matchingUser));
        this.router.navigate(['/new-leave-requests']);
      } else {
        localStorage.setItem('loginUser', JSON.stringify(matchingUser));
        this.router.navigate(['/dashboard']);
      }
    }
    else{
      this.errorMessage = "Wrong Password or Email";
    }
  }
  ngOnInit() {}
}
