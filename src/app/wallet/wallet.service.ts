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
export class WalletService {
  REST_TYPE_GET : string = "GET";
  REST_TYPE_POST : string = "POST";
  REST_TYPE_PUT: string = "PUT";
  REST_TYPE_DELETE: string = "DELETE";
  email: any;
  private host = Props.API_END_POINT;
  constructor(private http: Http, private appService: AppService, private httpService: HttpService, 
              private activatedroute: ActivatedRoute) {

  }

  walletlist(data: any): Observable<any> {
    const httpReq: HttpReq = new HttpReq();
    httpReq.type = this.REST_TYPE_GET;
    httpReq.url = "walletlist";
    httpReq.showLoader = true;
    this.email = {email: data.email};
    httpReq.body.data = this.email;
    //console.log(httpReq)
    return this.httpService.restCall(httpReq);
  }

  userLoginEmit() {
    this.appService.sessionClear();
    this.appService.sessionUserEmit(null);
  }

  getParam(key: string){
    return this.activatedroute.snapshot.queryParams[key];
  }

  createWallet(data: any): Observable<any> {
    const httpReq: HttpReq = new HttpReq();
    httpReq.type = this.REST_TYPE_POST;
    httpReq.url = "create";
    httpReq.showLoader = true;
    console.log(data);
    httpReq.body.data = data;
    //console.log(httpReq)
    return this.httpService.restCall(httpReq);
  }
  bitbalance(data: any): Observable<any> {
    const httpReq: HttpReq = new HttpReq();
    httpReq.type = this.REST_TYPE_POST;
    httpReq.url = "balance";
    httpReq.showLoader = true;
    console.log(data);
    httpReq.body.data = data;
    //console.log(httpReq)
    return this.httpService.restCall(httpReq);
  }
}


