import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { EventPageComponent } from './event-page/event-page.component';
import { OurIdolComponent } from './our-idol/our-idol.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { KamusngidolComponent } from './kamusngidol/kamusngidol.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'event', component: EventPageComponent},
  {path: 'idolgroup', component: OurIdolComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'kamusngidol', component: KamusngidolComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
