import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import{ AdminService } from '../../service/admin/admin.service'
import{ UserService } from '../../service/user/user.service'


@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {
  hide=true;
  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private adminService: AdminService,private route:Router,private userservice: UserService) {
    this.form = this.formBuilder.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['',[Validators.required]]
    });

   }

  ngOnInit(): void {
  }
  submit(){

    if (this.form.valid) {

      console.log(this.form.value);
      let reqObj = {
        email : this.form.value.email,
        password : this.form.value.password
      }
      let array=[] as any;
      this.userservice.login(reqObj).subscribe((res)=>{
        console.log(res)
        array=res;
        localStorage.setItem('access',array.result.accessToken)

        this.route.navigate(['/dashboarduser'])
      },(error)=>{
        console.log(error)
      })
    }

  }
  
}