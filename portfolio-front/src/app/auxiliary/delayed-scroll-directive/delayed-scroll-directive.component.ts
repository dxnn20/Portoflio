import {Component, ElementRef, HostListener} from '@angular/core';

@Component({
  selector: 'app-delayed-scroll-directive',
  standalone: true,
  imports: [],
  templateUrl: './delayed-scroll-directive.component.html',
  styleUrl: './delayed-scroll-directive.component.scss'
})
export class DelayedScrollDirectiveComponent {
  constructor(private el: ElementRef) { }

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent) {
    event.preventDefault();
    this.scrollWithDelay(event.deltaY);
  }

  private scrollWithDelay(deltaY: number) {
    const scrollSpeed = 0.5; // Adjust this value to control the delay
    const scrollAmount = deltaY * scrollSpeed;

    this.el.nativeElement.scrollTop += scrollAmount;
  }

}
