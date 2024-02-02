import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { SliderComponent } from './slider/slider.component';
import { NotFoundComponent } from './notFound/notFound.component';

const routes: Routes = [
  {path:'' , redirectTo:'home' , pathMatch:'full'},
  {path:'home' , component:HomeComponent, title: "Home"},
  {path:'about' , component:AboutComponent, title: "About"},
  {path:'contact' , component:ContactComponent, title: "Contact"},
  {path:'gallery' , component:GalleryComponent, title: "Gallery"},
  {path:'slider' , component:SliderComponent, title: "Slider"},
  {path:'**' , component: NotFoundComponent, title: "NOT-FOUND"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
