import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
})
export class ScrollAnimationDirective implements AfterViewInit {
  @HostBinding('@scrollAnimation')
  animate = true;

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animate = true;
            this.observer?.unobserve(this.el.nativeElement);
          }
        });
      },
      { threshold: 0.1 }
    );

    this.observer.observe(this.el.nativeElement);
  }
}
