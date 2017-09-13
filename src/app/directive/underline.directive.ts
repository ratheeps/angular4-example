import {Directive, HostListener, Renderer2, ElementRef} from '@angular/core';

@Directive({
  selector: '[appUnderline]'
})
export class UnderlineDirective {

  constructor(private renderer: Renderer2, private el: ElementRef) {
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hover(true);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hover(false);
  }

  hover(shouldUnderline: boolean) {
    if (shouldUnderline) {
      this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'underline');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'none');
    }
  }
}
