import { Component, OnInit } from '@angular/core';
import{AdminService} from '../../service/admin/admin.service'
import { RegisterComponent } from '../register/register.component';
import { MatDialog } from '@angular/material/dialog';

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

  constructor(private matdialog: MatDialog,private adminservice:AdminService) { }
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
}


