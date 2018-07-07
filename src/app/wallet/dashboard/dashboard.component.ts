import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WalletService } from '../wallet.service';
import { Storage }from '../../shared/utils/storage';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  walletList: any;
  user: any ;
  balance: boolean = false;
  constructor(private router: Router, private walletService: WalletService) {
    this.user = Storage.getSessionUser();
    this.walletService.walletlist(this.user).subscribe(
      data => {
       this.walletList = data.data;
       console.log(this.walletList);
      },
      error => {
           console.log(error);
      });
   }

  ngOnInit() {
  }
  sendWallet(){
    this.router.navigate(['/send']);
  }
  receiveWallet(){
    this.router.navigate(['/receive'])
  }
  deleteWallet(){
    this.router.navigate(['/delete']);
  }
  checkBalance(index: any){
    this.balance = !this.balance;
    console.log(index);
    let data={
      walletid:index.walletid
    }
    this.walletService.bitbalance(data).subscribe(
      data => {

       console.log(data);
      },
      error => {
           console.log(error);
      });
  }

}
