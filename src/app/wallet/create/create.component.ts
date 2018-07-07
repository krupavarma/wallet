import { Component, OnInit } from '@angular/core';
import { createWallet } from '../../apex/entities/createWallet.entity';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WalletService } from '../wallet.service';
import { AuthService }  from '../../auth/auth.service';
import { Storage } from '../../shared/utils/storage';
import { AppService } from '../../shared/service/app.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createWalletForm: FormGroup;
  CreateWallet : createWallet = new createWallet;
  constructor(private formBuilder: FormBuilder, private walletService: WalletService,private authService:AuthService,private AppService:AppService) {
    this.createWalletForm = this.formBuilder.group({
      'walletid': ['', Validators.required],
      'walletpassword': ['',  Validators.compose([Validators.required, Validators.minLength(5)])]
     });
     //this.getDummyList();
  }
   

  ngOnInit() {
  }

  createWalletDetails(data: any){
    console.log(data);
    var sessionEmail=Storage.getSessionUser();
    // let email=sessionStorage.getItem(data);
    // console.log(email.email);
     let obj={
            email:sessionEmail.email,
            walletid:data.walletid,
            walletpassword:data.walletpassword
      }
    this.walletService.createWallet(obj).subscribe( (res: Response) => {
        console.log(res);
    },
      (err: Error) => {
        console.log(err);
      }
  
    )
  }

}
