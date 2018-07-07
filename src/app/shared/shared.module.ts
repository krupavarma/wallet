import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ApexService } from './service/apex.service';
import { ReportService } from './service/report.service';

import { AppService } from './service/app.service';
import { ImageCropperModule } from 'ngx-image-cropper';
import { HttpModule } from '@angular/http';
import { AppImgUploadComponent } from './component/app.imgupload.component';
import { AppImgLoadComponent } from './component/app.imgload.component';
import { FormMessagesComponent } from './component/form.messages.component';
import { AppCropImgComponent } from './component/app.imgcrop.component';
import { SearchBarComponent } from './component/search-bar.component';
import { HttpService } from './service/http.service';
import {
    MatFormFieldModule, MatCheckboxModule, MatInputModule, MatRadioModule, MatSelectModule,
    MatSlideToggleModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatListModule,
    MatGridListModule, MatCardModule, MatExpansionModule,
    MatButtonModule, MatChipsModule, MatIconModule, MatAutocompleteModule,
    MatTooltipModule, MatSnackBarModule,
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        CommonModule, FlexLayoutModule, FormsModule, ReactiveFormsModule,
        MatFormFieldModule, MatCheckboxModule, MatInputModule, MatRadioModule, MatSelectModule,
        MatSlideToggleModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatListModule,
        MatGridListModule, MatCardModule, MatExpansionModule,
        MatButtonModule, MatChipsModule, MatIconModule,
        MatTooltipModule, MatSnackBarModule, MatAutocompleteModule,
        ImageCropperModule, HttpModule

    ],
    declarations: [
        FormMessagesComponent, AppImgUploadComponent, AppImgLoadComponent, AppCropImgComponent,
        SearchBarComponent,
    ],
    exports: [
        CommonModule, FormsModule, ReactiveFormsModule, FlexLayoutModule,
        FormMessagesComponent, AppImgUploadComponent, AppImgLoadComponent,
        MatFormFieldModule, MatCheckboxModule, MatInputModule, MatRadioModule, MatSelectModule,
        MatSlideToggleModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatListModule,
        MatGridListModule, MatCardModule, MatAutocompleteModule, MatExpansionModule,
        MatButtonModule, MatChipsModule, MatIconModule,
        MatTooltipModule, MatSnackBarModule,
        AppImgLoadComponent, AppCropImgComponent,
        SearchBarComponent

    ],
    providers: [HttpService]

})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                ApexService,
                ReportService,
                AppService,
            ],
        };
    }
}