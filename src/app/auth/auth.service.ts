import { Injectable } from '@angular/core';
import { Props } from '../apex/common/props';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Storage }from '../shared/utils/storage';
import { AppService } from '../shared/service/app.service';
import { HttpReq } from "../shared/common/app.entity";
import { HttpService } from '../shared/service/http.service';
@Injectable()
export class AuthService {
    REST_TYPE_GET : string = "GET";
    REST_TYPE_POST : string = "POST";
    REST_TYPE_PUT: string = "PUT";
    REST_TYPE_DELETE: string = "DELETE";
  private host = Props.API_END_POINT;
  url: string;
  token: any;
  constructor(private http: Http, private appService: AppService, private httpService: HttpService, private activatedroute: ActivatedRoute) {
   }

  //  login(data: any): Observable<any> {
  //   const httpReq: HttpReq = new HttpReq();
  //   console.log(Props.API_END_POINT);
  //   this.url = this.host + "login";
  //   httpReq.showLoader = true;
  //   return this.http.post(this.url, data)
  //     .map(response => {
  //       let data = response.json();
  //       console.log(data);
  //       return response.json()
  //     })
  // }

  login(data:any){
    const httpReq: HttpReq = new HttpReq();
     httpReq.type = this.REST_TYPE_POST;
     httpReq.url = "login";
     httpReq.showLoader = true;
     httpReq.body.data = data;
    
     return this.httpService.restCall(httpReq);
  }

  storageSave(data: any){
    if(data) {
        Storage.setSessionUser(data);
        this.appService.sessionUserEmit(data);
    }
  }

register(data: any): Observable<any> {
    const httpReq: HttpReq = new HttpReq();
    httpReq.type = this.REST_TYPE_POST;
    httpReq.url = "register";
    httpReq.showLoader = true;
    httpReq.body.data = data;
    return this.httpService.restCall(httpReq);
}


reset(data: any): Observable<any> {
    const httpReq: HttpReq = new HttpReq();
    httpReq.type = this.REST_TYPE_POST;
    httpReq.url = "resetPassword";
    httpReq.showLoader = true;
    httpReq.body.data = data;
    return this.httpService.restCall(httpReq);
}

setPassword(data: any): Observable<any> {
  const httpReq: HttpReq = new HttpReq();
  httpReq.type = this.REST_TYPE_POST;
  httpReq.url = "setpassword";
  httpReq.showLoader = true;
  httpReq.body.data = data;
  return this.httpService.restCall(httpReq);
}

userLoginEmit() {
  this.appService.sessionClear();
  this.appService.sessionUserEmit(null);
}

logout(): void {
  this.token = null;
  localStorage.removeItem('currentUser');
}
getParam(key: string){
  return this.activatedroute.snapshot.queryParams[key];
}

}

