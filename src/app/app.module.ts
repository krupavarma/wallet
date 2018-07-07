import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { WalletModule } from './wallet/wallet.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './auth/header/header.component';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule, MatSidenavModule, MatIconModule, MatTooltipModule, MatProgressSpinnerModule,  MatToolbarModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent} from './apex/menu/menu.component';
import { CommonService} from './service/common.service';
import { CommonModule } from '@angular/common';
import { WalletService } from '../app/wallet/wallet.service';
@NgModule({
  declarations: [
    AppComponent, MenuComponent
  ],
  imports: [
    BrowserModule, AuthModule, WalletModule, RouterModule, FlexLayoutModule, BrowserAnimationsModule, 
    MatSidenavModule, MatButtonModule, MatIconModule, MatTooltipModule, HttpModule, MatProgressSpinnerModule,
    SharedModule.forRoot(), CommonModule, HttpClientModule, MatToolbarModule
  ],
  providers: [CommonService, WalletService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
