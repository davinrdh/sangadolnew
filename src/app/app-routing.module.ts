import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { EventPageComponent } from './pages/event-page/event-page.component';
import { OurIdolComponent } from './pages/our-idol/our-idol.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'event', component: EventPageComponent},
  {path: 'idolgroup', component: OurIdolComponent},
  {path: 'about', component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
