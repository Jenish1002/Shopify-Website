import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form = new FormGroup({
    firstName:new FormControl('', Validators.required),
    lastName:new FormControl('', Validators.required),
    email:new FormControl('', [Validators.required,Validators.email]),
    password:new FormControl('', [Validators.required, Validators.minLength(6)]),
  })
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    alert("you are successfully Registered...")
  }
}
