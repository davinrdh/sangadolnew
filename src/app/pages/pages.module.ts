import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { EventPageComponent } from './event-page/event-page.component';
import {OurIdolComponent } from './our-idol/our-idol.component';
import {AboutUsComponent } from './about-us/about-us.component';
import { NextDirective } from './home-page/directive/next.directive';
import { SenlistPageComponent } from './senlist-page/senlist-page.component';
import { KohisekaiPageComponent } from './our-idol/kohisekai-page/kohisekai-page.component';
import { Jkt48PageComponent } from './our-idol/jkt48-page/jkt48-page.component';
import { MinervalandPageComponent } from './our-idol/minervaland-page/minervaland-page.component';
import { IrisidolPageComponent } from './our-idol/irisidol-page/irisidol-page.component';
import { SharedModule } from '../shared/shared.module';
import { KamusngidolComponent } from './kamusngidol/kamusngidol.component';


@NgModule({
  declarations: [
    HomePageComponent,
    EventPageComponent,
    OurIdolComponent,
    AboutUsComponent,
    NextDirective,
    SenlistPageComponent,
    KohisekaiPageComponent,
    Jkt48PageComponent,
    MinervalandPageComponent,
    IrisidolPageComponent,
    KamusngidolComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
