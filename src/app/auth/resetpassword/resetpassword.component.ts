import { ResetPassword } from '../../apex/entities/resetpassword.entity';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService }  from '../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  UserDetailsForm: FormGroup;
  resetPassword : ResetPassword = new ResetPassword;
  response: any;
  showServerError: any;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  constructor(private formBuilder: FormBuilder , private router: Router, private authService: AuthService) { 
    this.UserDetailsForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.pattern(this.emailPattern)]]
     });
  }

  ngOnInit() {
  }

  Reset(){
    console.log(this.resetPassword);
    this.authService.reset(this.resetPassword)
        .subscribe(
            data => {
              //console.log(data);
              this.response = data.message;
              this.resetPassword = new ResetPassword();
            },
            error => {
              //console.log(error);
              this.showServerError="OOPS! Something went wrong please try again"   
  });
} 

}
