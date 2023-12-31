import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   form = new FormGroup({
     email:new FormControl('', [Validators.required,Validators.email]),
     password:new FormControl('', [Validators.required, Validators.minLength(6)])
   })
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    alert("you are successfully logged In")
  }
}
