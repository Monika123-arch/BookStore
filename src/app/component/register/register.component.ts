import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { AdminService } from 'src/app/service/admin/admin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private adminservice :AdminService) {
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
    }
      let reqObj = {
        bookName : this.form.value.bookname,
        author: this.form.value. Authername,
        description : this.form.value. Discription,
        quantity: this.form.value.Quantity,
        price: this.form.value.Price,
        discountPrice:this.form.value.DiscountPrice

      }
      console.log(reqObj);
     this.adminservice.addbook(reqObj).subscribe((res) =>{
       console.log(res);
       
     },(error) =>  {
       console.log(error);
     } )

    
    }

  
  
}

