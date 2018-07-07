import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AuthService } from './auth.service';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule, MatFormFieldModule, MatCardModule, MatInputModule, MatToolbarModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SetpasswordComponent } from './setpassword/setpassword.component'
import { HttpModule } from '@angular/http';
const routes: Routes = [
  {path: '', component: LandingpageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'resetpassword', component: ResetpasswordComponent},
  {path: 'setpassword', component: SetpasswordComponent}
]
@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes), FlexLayoutModule, MatButtonModule, MatFormFieldModule, 
    MatCardModule, FormsModule, ReactiveFormsModule, MatInputModule, MatToolbarModule, SharedModule, HttpModule
  ],
  providers: [AuthService],
  declarations: [LoginComponent, RegisterComponent, SetpasswordComponent, LandingpageComponent, HeaderComponent, ResetpasswordComponent]
})
export class AuthModule { }
