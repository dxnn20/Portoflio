import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayedScrollDirectiveComponent } from './delayed-scroll-directive.component';

describe('DelayedScrollDirectiveComponent', () => {
  let component: DelayedScrollDirectiveComponent;
  let fixture: ComponentFixture<DelayedScrollDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelayedScrollDirectiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DelayedScrollDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
