import { Component, ViewChild, OnInit, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { ApexService } from './shared/service/apex.service';
import { MatIconRegistry } from '@angular/material';
import { Util } from './shared/utils/util';
import { AppService } from './shared/service/app.service';
import { Storage } from './shared/utils/storage';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showLoader: boolean = false;
  private _userSubscription: any;
  private _loaderSubscription: any;
  private _menuSubscription: any;
  concat:string;
  @ViewChild('sidenav') sidenav: MatSidenav;
  navMode = 'side';
  showMenu = true;
  sessionUser: any;
  constructor(private apexService: ApexService,  private _iconRegistry: MatIconRegistry, private appService:AppService) {
      this.loadIcons();
   }

  ngOnInit() {
    this._loaderSubscription = this.apexService.loaderEvent.subscribe(data => {
      if (data != this.showLoader) {
        this.showLoader = data;
      }

    });
    this.apexService.showLoader(false);
    this._userSubscription = this.apexService.sessionUserEvent.subscribe(data => {
     
      this.sessionUser = Storage.getSessionUser();
      //console.log(this.sessionUser);
      // this.sessionUser = {email: "mmanideep@gmail.com", password: "man"};
      if(this.sessionUser){
        if(this.navMode == 'over'){
          setTimeout( ()=>{
            if( this.sidenav){
              this.sidenav.close();
            }
          }, 100)
        }
      }
    });
    if (window.innerWidth < 768) {
      this.navMode = 'over';
    } 
    this.apexService.sessionUserEmit(Storage.getSessionUser());
   
  }  
  loadIcons(){
        this._iconRegistry.addSvgIconSetInNamespace('core',
          this.apexService.bypassURL('/assets/icons/app-icons.svg'));
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
        if (event.target.innerWidth < 768) {
            this.navMode = 'over';
            if( this.sidenav){
              this.sidenav.close();
            }
           
        }
        if (event.target.innerWidth > 768) {
           this.navMode = 'side';
           if(this.sidenav){
            this.sidenav.open();
           }
          
        }
  }
}
