import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import {ShowcaseRoutingModule} from "./showcase-routing.module";
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import {MatButton} from "@angular/material/button";
import { HeaderComponent } from './components/header/header.component';
import { HeroSliderComponent } from './components/hero-slider/hero-slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeSectionItemsComponent } from './components/home-section-items/home-section-items.component';



@NgModule({
  declarations: [
    HomeComponent,
    MainMenuComponent,
    HeaderComponent,
    HeroSliderComponent,
    FooterComponent,
    HomeSectionItemsComponent
  ],
  exports: [
    HomeComponent,
    MainMenuComponent,
    HeaderComponent,
    HeroSliderComponent,
    HomeSectionItemsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ShowcaseRoutingModule,
    MatButton,
  ]
})
export class ShowcaseModule { }
