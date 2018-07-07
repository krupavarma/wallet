import { MatSnackBar} from '@angular/material';
import {Injectable, Output, EventEmitter} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class ApexService {

     sessionUserEvent: EventEmitter<any>  = new EventEmitter( );
     menuEvent:  EventEmitter<any>  = new EventEmitter( );
     loaderEvent: EventEmitter<any>  = new EventEmitter( );

    constructor(private _domSanitizer: DomSanitizer, private _snackBarService: MatSnackBar ){

    }
   sessionUserEmit (sessionUser: any) {
        this.sessionUserEvent.emit(sessionUser);
    }
    bypassURL(url: string){
        return this._domSanitizer.bypassSecurityTrustResourceUrl(url);
    }
    showLoader(show: Boolean) {
        setTimeout(() => {
            this.loaderEvent.next(show);
        }, 100)
      
   }
   showMessage(message: string){
    this._snackBarService.open(message, 'x',{ duration: 9999 });
  //  snackBarRef.onAction().subscribe( data => {console.log(data) ; });
}
}