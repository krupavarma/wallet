import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Props } from '../../apex/common/props';
import { HttpReq, ErrorMessage } from './../common/app.entity';
import { Util } from "../utils/util";
import { Storage } from "../utils/storage";
import { ApexService } from "./apex.service";
import 'rxjs/add/operator/map'
@Injectable()
export class HttpService {
    headers: Headers;
    CONTENT_TYPE: string = "application/x-www-form-urlencoded";
    // CONTENT_TYPE : string = "application/json";
    public API_ENDPOINT = Props.API_END_POINT;
    constructor(private http: Http, private apexService: ApexService) {
        this.http = http;
    }

    // createAuthorizationHeader() {
    //     let jwt = this.getJwt();
    //     if (jwt) {
    //         this.headers.append('Accept', jwt);
    //     } else {
    //         this.headers.append('Accept', '*/*');
    //     }
    //     //console.log(this.headers);
    // }
    // appendHeaders() {
    //     this.headers = new Headers();
    //     this.headers.append('Content-Type', this.CONTENT_TYPE);
    //     this.createAuthorizationHeader();

    // }
    // loadCall(httpReq: HttpReq) {
    //     this.showLoader(false);
    //     return this.loadMethod(httpReq);
    // }
    restCall(httpReq: HttpReq) {

        if (httpReq.showLoader && httpReq.showLoader === true) {
            this.showLoader(true);
        }
        return this.restService(httpReq);
    }

    restService(httpReq: HttpReq) {

        if (httpReq.type == "GET") {
            return this.getMethod(httpReq);
        } else if (httpReq.type == "POST") {
            return this.postMethod(httpReq);
        } else if (httpReq.type == "PUT") {
            return this.putMethod(httpReq);
        } else if (httpReq.type == "DELETE") {
            return this.deleteMethod(httpReq);
        }
    }
    // loadMethod(httpReq: HttpReq) {
    //     console.log(httpReq);
    //     let paramString = Util.GetParamString(httpReq.body ? httpReq.body.data : {});
    //     let url = this.API_ENDPOINT + 'dataload/' + httpReq.url + paramString;
    //     return this.http.get(url, { headers: this.headers }).map(
    //         (resp: Response) => {

    //             if (resp.json().status == 1) {
    //                 return resp.json().data;
    //             }
    //             else {
    //                 this.errorMessage(resp.json().error);
    //                 return null;
    //             }
    //         }
    //     );
    // }


    getMethod(httpReq: HttpReq) {
        //console.log(httpReq);
        let paramString = Util.GetParamString(httpReq.body ? httpReq.body.data : {});
        let url = this.API_ENDPOINT + httpReq.url + paramString;
        
        return this.http.get(url, { headers: this.headers }).map(
            (resp: Response) => {
                if (httpReq.showLoader && httpReq.showLoader === true) {
                    this.showLoader(false);
                }

                if (resp.json().status == 1) {
                    
                    return resp.json();
                } else {
                    this.errorMessage(resp.json().error);
                    return null;
                }
            }
        );
    }

    postMethod(httpReq: HttpReq) {
        let url = this.API_ENDPOINT + httpReq.url;
        let data2 = httpReq.body.data;
        console.log(data2);
        return this.http.post(url, data2, { headers: this.headers }).map(
            (resp: Response) => {
                if (httpReq.showLoader && httpReq.showLoader === true) {
                    this.showLoader(false);
                }
                if (resp.json().status == 1) {
                    return resp.json();
                } else {
                    return resp.json();
                }

            },
            (error: Error) => {
                console.log("error Message :" + JSON.stringify(error));
            }
        );
    }

    putMethod(httpReq: HttpReq) {
        let url = this.API_ENDPOINT + httpReq.url;
        return this.http.put(url, JSON.stringify(httpReq.body), { headers: this.headers }).map(
            (resp: Response) => {
                if (httpReq.showLoader && httpReq.showLoader === true) {
                    this.showLoader(false);
                }
                if (resp.json().status == 1) {
                    return resp.json().data;
                } else {
                    this.errorMessage(resp.json().error);
                    return null;
                }

            },
            (error: Error) => {
                console.log("error Message :" + JSON.stringify(error));
            }
        );
    }
    // authMethod(httpReq: HttpReq) {
    //     if (httpReq.showLoader && httpReq.showLoader === true) {
    //         this.showLoader(true);
    //     }

    //     let url = this.API_ENDPOINT + httpReq.url;
    //     let restMethod: any;
    //     if (httpReq.type == 'PUT') {
    //         restMethod = this.http.put(url, JSON.stringify(httpReq.body), { headers: this.headers });
    //     } else {
    //         restMethod = this.http.post(url, JSON.stringify(httpReq.body), { headers: this.headers });
    //     }
    //     return restMethod.map(
    //         (resp: Response) => {
    //             if (httpReq.showLoader && httpReq.showLoader === true) {
    //                 this.showLoader(false);
    //             }
    //             if (resp.json().status == 1) {
    //                 console.log(resp.json().data.menuList);
    //                 Storage.setJWT(resp.json().data.jwt);
    //                 Storage.setSessionUser(resp.json().data.user);
    //                 Storage.setMenuList(resp.json().data.menuList);
    //                 Storage.setBranch(resp.json().data.branch);
                    
    //                 this.apexService.sessionUserEmit(resp.json().data.user);
    //                 // this.createAuthorizationHeader();
    //                 return resp.json().data.user;
    //             } else {
    //                 this.errorMessage(resp.json().error);
    //                 return null;
    //             }

    //         },
    //         (error: Error) => {
    //             console.log("error Message :" + JSON.stringify(error));
    //         }
    //     );
    // }

    deleteMethod(httpReq: HttpReq) {
        console.log(httpReq);
        let paramString = Util.GetParamString(httpReq.body ? httpReq.body.data : {});
        let url = this.API_ENDPOINT + httpReq.url + paramString;
        return this.http.delete(url, { headers: this.headers }).map(
            (resp: Response) => {
                if (httpReq.showLoader && httpReq.showLoader === true) {
                    this.showLoader(false);
                }
                if (resp.json().status == 1) {
                    return resp.json().data;
                } else {
                    this.errorMessage(resp.json().error);
                    return null;
                }
            }
        );
    }
    // getJwt() {
    //     return Storage.getJWT();
    // }
    // report(httpReq: HttpReq) {
    //     this.showLoader(true);
    //     let paramString = Util.GetParamString(httpReq.body ? httpReq.body.data : {});
    //     let url = this.API_ENDPOINT + httpReq.url + paramString;
    //     return new Promise((resolve, reject) => {
    //         var xhr = new XMLHttpRequest();;
    //         xhr.open("GET", url);
    //         xhr.setRequestHeader("Content-type", this.CONTENT_TYPE);
    //         xhr.onreadystatechange = (() => {
    //             if (xhr.readyState == 0 || xhr.readyState == 4) {
    //                 this.showLoader(false);
    //                 var data = JSON.parse(xhr.response);
    //                 if (data.status == 1) {
    //                     resolve(data.data);
    //                 } else {
    //                     this.errorMessage(data.error);
    //                     reject(data);
    //                 }
    //             }
    //         });
    //         xhr.send();
    //     });
    // }
    // pdf(httpReq: HttpReq, fileName: string) {
    //     this.showLoader(true);
    //     let paramString = Util.GetParamString(httpReq.body ? httpReq.body.data : {});
    //     let url = this.API_ENDPOINT + httpReq.url + paramString;
    //     var xhr = new XMLHttpRequest();
    //     xhr.open("GET", url);
    //     //xhr.responseType = "blob";
    //     xhr.setRequestHeader("Content-type", this.CONTENT_TYPE);
    //     xhr.onload = () => {
    //         if (xhr.status === 200) {
    //             this.showLoader(false);
    //             var blob = xhr.response;
    //             //  Util.ES.PrintPopup(blob);
    //             HttpService.PrintPopup(blob);
    //         }
    //     };
    //     xhr.send();
    // }

    showLoader(show: boolean) {
        this.apexService.showLoader(show);
    }
    errorMessage(err: ErrorMessage) {
        this.apexService.showMessage(err.message);
    }

    static PrintPopup(data: any) {
        //    console.log(data);
        // if(typeof cordova === 'undefined') {
        var frame1 = document.createElement('iframe');
        frame1.name = "frame1";
        frame1.style.position = "absolute";
        frame1.style.top = "-1000000px";
        document.body.appendChild(frame1);
        var frameDoc = frame1.contentWindow ? frame1.contentWindow : frame1.contentDocument['document'] ? frame1.contentDocument['document'] : frame1.contentDocument;
        frameDoc.document.open();
        frameDoc.document.write(data);
        frameDoc.document.close();
        setTimeout(function () {
            window.frames["frame1"].focus();
            window.frames["frame1"].print();
            document.body.removeChild(frame1);
        }, 500);
        return false;
        // }else {
        //     cordova.plugins.printer.print(data, {duplex: 'long'}, function (res : any) {
        //         alert(res ? 'Done' : 'Canceled');
        //     });
        // }
    }

}


