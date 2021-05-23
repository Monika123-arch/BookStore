import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor( private  httpService: HttpService ) { }

  login(data:any){

    return this.httpService.post('admin/login',data);
  }
}

