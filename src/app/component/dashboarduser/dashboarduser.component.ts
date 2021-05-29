import { Component, OnInit } from '@angular/core';
import{AdminService} from '../../service/admin/admin.service'
import { RegisterComponent } from '../register/register.component';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/service/user/user.service';
import { Router } from '@angular/router';

interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-dashboarduser',
  templateUrl: './dashboarduser.component.html',
  styleUrls: ['./dashboarduser.component.css']
})
export class DashboarduserComponent implements OnInit {

  constructor(private matdialog: MatDialog,private adminservice:AdminService,private userservice:UserService,private router:Router) { }
  bookArray = [] as any;

  ngOnInit(): void {
    this.displaybook();
  }
  displaybook(){
    let list =[] as any;
   this.adminservice.displaybook().subscribe((res) =>{
     console.log(res);
     list = res;
     this.bookArray = list.result;
     console.log(this.bookArray);
     
   },(error) =>  {
     console.log(error);
   } )
  
   }
   foods: Food[] = [
    {value: 'price', viewValue: 'Low to High'},
    {value: 'price', viewValue: 'High to Low'},
    {value: '', viewValue: 'Newst arrivel'}
  ];
  addbag(data){
    let id=data._id;
    let req={}
    this.userservice.addbag(id,req).subscribe((response) =>{
      this.router.navigate(['/userorder'])
      console.log(response);
    },(error)=>{
      console.log(error);
    })
  }
}


