import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule, MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatSelectModule,
  MatDatepickerModule,
  MatButtonToggleModule,
  MatAutocompleteModule,
  MatTabsModule,
  MatNativeDateModule
} from '@angular/material';
import {KSSwiperModule} from "angular2-swiper";

import { AppComponent } from './app.component';
import { IndexViewComponent } from './index-view/index-view.component';
import { CarouselImgComponent } from './shared/carousel-img/carousel-img.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexViewComponent,
    CarouselImgComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatNativeDateModule,
    KSSwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
