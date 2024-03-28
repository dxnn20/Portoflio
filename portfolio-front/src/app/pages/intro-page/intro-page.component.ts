import {AfterViewChecked, AfterViewInit, Component, ElementRef, HostListener} from '@angular/core';
import {MatDialogContainer} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";
import {animate, style, transition, trigger} from "@angular/animations";
import {CardComponent} from "../../auxiliary/card/card.component";

interface Card {
  title: string;
  description: string;
}

@Component({
  selector: 'app-intro-page',
  standalone: true,
  imports: [
    MatDialogContainer,
    MatButtonModule,
    RouterLink,
    NgForOf,
    CardComponent,
  ],
  templateUrl: './intro-page.component.html',
  styleUrl: './intro-page.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('1s ease-in-out', style({opacity: 1})),
      ]),
    ]),
  ],
})

export class IntroPageComponent {

  opacity: number = 0
  sentenceOne: string = 'Let\'s get started!'
  words = this.sentenceOne.split(" ")
  test: string = 'test'
  cards: Card[] = [{
    title: "HTML",
    description: "This is the first card"
  },{
    title: "CSS",
    description: "This is the second card"
  },{
    title: "TypeScript",
    description: "This is the third card"
  }]

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.opacity = Math.min(scrollPosition - 29000 / 100, 1); // Adjust the division number to control the rate of opacity change
  }
}
