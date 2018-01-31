import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  MatNativeDateModule,
  MatGridListModule,
  MatSliderModule
} from '@angular/material';
import {KSSwiperModule} from "angular2-swiper";

import { AppComponent } from './app.component';
import { IndexViewComponent } from './index-view/index-view.component';
import { CarouselImgComponent } from './shared/carousel-img/carousel-img.component';
import { IndexHeadComponent } from './index-view/index-head/index-head.component';
import { MultipleChoicesComponent } from './index-view/index-head/multiple-choices/multiple-choices.component';
import { ImageTextComponent } from './index-view/index-head/image-text/image-text.component';
import { StarComponent } from './shared/star/star.component';
import { ImgEnlargeComponent } from './shared/img-enlarge/img-enlarge.component';
import { FooterViewComponent } from './shared/footer-view/footer-view.component';
import { TravelResultsComponent } from './travel-results/travel-results.component';
import { ImageTextXsComponent } from './index-view/index-head/image-text-xs/image-text-xs.component';
import { TravelNavComponent } from './travel-results/travel-nav/travel-nav.component';
import { TravelPanelComponent } from './travel-results/travel-panel/travel-panel.component';
import { TravelImgtextComponent } from './travel-results/travel-imgtext/travel-imgtext.component';

import { ImgTextService } from "./services/img-text.service";

@NgModule({
  declarations: [
    AppComponent,
    IndexViewComponent,
    CarouselImgComponent,
    IndexHeadComponent,
    MultipleChoicesComponent,
    ImageTextComponent,
    StarComponent,
    ImgEnlargeComponent,
    FooterViewComponent,
    TravelResultsComponent,
    ImageTextXsComponent,
    TravelNavComponent,
    TravelPanelComponent,
    TravelImgtextComponent,
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
    MatGridListModule,
    MatSliderModule,
    KSSwiperModule,
    FormsModule
  ],
  providers: [ImgTextService],
  bootstrap: [AppComponent]
})
export class AppModule { }
