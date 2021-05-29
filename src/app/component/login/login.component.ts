import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import{ AdminService } from '../../service/admin/admin.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private adminService: AdminService,private route:Router)  {
    this.form = this.formBuilder.group({
      Email : ['', [Validators.required, Validators.email]],
      password : ['',[Validators.required]]
    });
  }

  ngOnInit(): void {
  }
  submit(){

    if (this.form.valid) {

      console.log(this.form.value);
      let reqObj = {
        email : this.form.value.Email,
        password : this.form.value.password
      }
      let array=[] as any;
      this.adminService.login(reqObj).subscribe((res)=>{
        console.log(res)
        array=res;
        localStorage.setItem('access',array.result.accessToken)

        this.route.navigate(['/dashboard'])
      },(error)=>{
        console.log(error)
      })
    }

  }
}

