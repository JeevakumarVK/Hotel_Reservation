import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Client } from 'src/User';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginAuth: AuthService,private router:Router) { }

 email:any;pwd:any;
 user:Client = new Client();
  ngOnInit(): void {
    
  }

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email]),
    pwd: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
    ]),
  }); 

  isUserValid: boolean = false;

  loginSubmited() {
    this.loginAuth
    .loginUser(this.email,this.pwd)
    .subscribe(res=> {
      if(res == 1){
        Swal.fire({
          text: 'Login Success',
          icon: 'success'
        });
        setTimeout(() => {
          this.isUserValid=false;
          this.router.navigateByUrl('/reservation');
          console.log('Login Successfull'); 
       }, 2000);

     
      }else{
        Swal.fire('Oops...', 'Invalid Credentials!', 'error');
        this.isUserValid=true;
        this.router.navigateByUrl('/login');
        console.log('Login Unsuccessful');
      }
    });
  }

  get Email(): FormControl{
    return this.loginForm.get("email") as FormControl;
  }
  get PWD(): FormControl{
    return this.loginForm.get("pwd") as FormControl;
  }
}

function swal(arg0: string, arg1: string, arg2: string) {
  throw new Error('Function not implemented.');
}

