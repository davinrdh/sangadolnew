import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { EventPageComponent } from './event-page/event-page.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { OurIdolComponent } from './our-idol/our-idol.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NextDirective } from './home-page/directive/next.directive'; 



@NgModule({
  declarations: [
    HomePageComponent,
    EventPageComponent,
    OurIdolComponent,
    AboutUsComponent,
    NextDirective,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
  ]
})
export class PagesModule { }
