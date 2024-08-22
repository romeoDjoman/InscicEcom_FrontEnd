import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ShowcaseComponent} from "./showcase.component";
import {HomeComponent} from "./components/home/home.component";
import {MainMenuComponent} from "./components/main-menu/main-menu.component";


const routes: Routes = [
  { path: 'showcase', component: ShowcaseComponent },
  { path: 'home', component: HomeComponent },
  { path: 'main-menu', component: MainMenuComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class ShowcaseRoutingModule { }
