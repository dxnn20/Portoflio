import { Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {IntroPageComponent} from "./pages/intro-page/intro-page.component";
import {CardComponent} from "./auxiliary/card/card.component";

export const routes: Routes = [
  {path: '', component: IntroPageComponent},
  {path: 'intro', component: IntroPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'card', component: CardComponent},
];
