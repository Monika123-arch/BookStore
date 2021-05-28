import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor( private  httpService: HttpService ) { }
  accessToken = localStorage.getItem('access');
  options = {
  headers: new HttpHeaders({
    'x-access-token': this.accessToken,
    'Content-Type': 'application/json',
    'accept': 'application/json'
  })
}
  login(data:any){

    return this.httpService.post('admin/login',data,'');
  }
  addbook(data:any){

    return this.httpService.post('admin/add/book',data,this.options);
  }
  displaybook(){

    return this.httpService.get('get/book',this.options);
}
  deletebook(id :any){
  return this.httpService.delete('admin/delete/book/'+id,this.options);
}
}
