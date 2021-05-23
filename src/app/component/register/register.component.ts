import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      bookname: ['', [Validators.required]],
      Authername: ['',[Validators.required]],
      Discription: ['',[Validators.required]],
      Quantity: ['',[Validators.required]],
      Price: ['',[Validators.required]],
      DiscountPrice: ['',[Validators.required]]
    });
   }
 

  ngOnInit(): void {
  }
  submit(){

    if (this.form.valid) {

      console.log(this.form.value);
      let reqObj = {
        bookname : this.form.value.bookname,
        Authername : this.form.value. Authername,
        Discription : this.form.value. Discription,
        Quantity: this.form.value. Discription,
        Price: this.form.value.Price,
        DiscountPrice:this.form.value.DiscountPrice


      }
    }

  }
}