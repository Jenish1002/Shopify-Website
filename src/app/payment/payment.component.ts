import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  form = new FormGroup({
    firstName:new FormControl('', Validators.required),
    lastName:new FormControl('', Validators.required),
    address:new FormControl('',Validators.required),
    mobileno:new FormControl('', [Validators.required, Validators.maxLength(10)]),
    state:new FormControl('',Validators.required),
    city:new FormControl('',Validators.required),
    zip:new FormControl('', [Validators.required, Validators.maxLength(6)]),
    cardname:new FormControl('',Validators.required),
    cardno:new FormControl('',Validators.required),
    expiry:new FormControl('',Validators.required),
    cvv:new FormControl('',Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    alert("The order has been placed successfully...")
  }

}
