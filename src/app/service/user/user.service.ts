import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../http/http.service';
import { identifierModuleUrl } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class UserService {
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

    return this.httpService.post('login',data,'');
  }
  addbag(id:any,data:any){
    return this.httpService.post('add_cart_item/'+id,data,this.options);
  }
  cartshow(){
    return this.httpService.get('get_cart_items',this.options);
  }
 
}



