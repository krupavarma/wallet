import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Register } from '../../apex/entities/register.entity';
import { Router } from '@angular/router';
import { AuthService }  from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  UserDetailsForm: FormGroup;
  register : Register = new Register;
  response: any;
  showServerError: any;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  constructor(private formBuilder: FormBuilder , private router: Router, private authService: AuthService) { 
    this.UserDetailsForm = this.formBuilder.group({
      'username': ['',  Validators.compose([Validators.required, Validators.minLength(5)])],
      'email': ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      'password': ['',  Validators.compose([Validators.required, Validators.minLength(5)])]
     });
  }

  ngOnInit() {
  }
  Register(){
    this.authService.register(this.register)
        .subscribe(
            data => {
              console.log(data);
              this.response = data.message;
              // this.router.navigate(['login']);
            },
            error => {
                 console.log(error);
                 this.showServerError="OOPS! Something went wrong please try again"   
            });
} 

}
