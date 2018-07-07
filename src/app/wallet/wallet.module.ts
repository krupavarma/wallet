import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SendComponent } from './send/send.component';
import { ReceiveComponent } from './receive/receive.component';
import { CreateComponent } from './create/create.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatFormFieldModule, MatCardModule, MatInputModule, MatToolbarModule, MatListModule, MatSelectModule } from '@angular/material';
import { WheaderComponent } from './wheader/wheader.component';
import { ProfileComponent } from './profile/profile.component'
import { WalletService } from '../wallet/wallet.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'send', component: SendComponent},
  {path: 'receive', component: ReceiveComponent},
  {path: 'createWallet', component: CreateComponent},
  {path: 'profile', component: ProfileComponent}
]

@NgModule({
  imports: [
    CommonModule, RouterModule, MatButtonModule, MatFormFieldModule, MatCardModule, 
    MatInputModule, RouterModule.forRoot(routes), FlexLayoutModule, MatToolbarModule, MatListModule, MatSelectModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [DashboardComponent, SendComponent, ReceiveComponent, CreateComponent, WheaderComponent, ProfileComponent],
  providers: [WalletService]
})
export class WalletModule { }
