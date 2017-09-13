import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHideEl]'
})
export class HideElDirective implements OnInit {
  @Input() appHideEl: boolean;
  constructor(public el: ElementRef, public renderer: Renderer2) { }

  ngOnInit() {
    if (this.appHideEl) {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
      this.renderer.setAttribute(this.el.nativeElement, 'title', 'Hide me');
    }
  }
}
