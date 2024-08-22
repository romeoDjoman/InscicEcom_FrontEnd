import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import {ShowcaseRoutingModule} from "./showcase-routing.module";
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import {MatButton} from "@angular/material/button";



@NgModule({
  declarations: [
    HomeComponent,
    MainMenuComponent
  ],
  exports: [
    HomeComponent,
    MainMenuComponent,
  ],
  imports: [
    CommonModule,
    ShowcaseRoutingModule,
    MatButton,
  ]
})
export class ShowcaseModule { }
