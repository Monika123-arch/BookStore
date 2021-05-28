import { Component, OnInit } from '@angular/core';
import{AdminService} from '../../service/admin/admin.service'
import { RegisterComponent } from '../register/register.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private matdialog: MatDialog,private adminservice:AdminService) { }
  bookArray = [] as any;

  
 openDialog() {
   this.matdialog.open(RegisterComponent);
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
  deleteBook(book){
    console.log(book);
    let id = book._id;
    this.adminservice.deletebook(id).subscribe((res)=>{
      console.log(res);
      this.displaybook();
    },(error)=> {
      console.log(error)
    })
  }

 ngOnInit(): void {
this.displaybook();


}

}