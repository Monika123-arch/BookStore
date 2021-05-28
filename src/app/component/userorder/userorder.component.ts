import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-userorder',
  templateUrl: './userorder.component.html',
  styleUrls: ['./userorder.component.css']
})
export class UserorderComponent implements OnInit {
  show = 1;
  show1 = 0;
  show2 = 1;
  
  constructor(private userservice:UserService) { }
  cartarray = [] as any;
  display(){
    this.show += 1;
  }
  
  displaynext(){
    this.show1 += this.show;
    this.show2 -= 1;
  }
  ngOnInit(): void {
   this.showcart();
  }


showcart(){
  let cart = [] as any;
  this.userservice.cartshow().subscribe((response)=>{
    console.log(response);
    cart = response;
    this.cartarray=cart.result;
    console.log(this.cartarray);
  },(error)=>{
    console.log(error);
  })
}
}

