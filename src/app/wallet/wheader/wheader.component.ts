import { Component, OnInit } from '@angular/core';
import { ApexService } from './../../shared/service/apex.service';
import { Storage } from './../../shared/utils/storage';
import { RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-wheader',
  templateUrl: './wheader.component.html',
  styleUrls: ['./wheader.component.css']
})
export class WheaderComponent implements OnInit {

  constructor(private apexService: ApexService, private router: Router) { }

  ngOnInit() {
  }
  logout(){
    Storage.clearSession();
    sessionStorage.clear();
    this.apexService.sessionUserEmit(null);
    this.router.navigate(['login'])
  }

  createWallet(){
    this.router.navigate(['createWallet']);
  }

}
