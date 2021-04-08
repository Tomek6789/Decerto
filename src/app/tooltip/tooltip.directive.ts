import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  })
export class TooltipDirective {

  @Input('appTooltip') appTooltipText: string = '';
  hello: any
  text: any

  constructor(private renderer:Renderer2, private elementRef: ElementRef) {}

   ngOnInit() {
    this.createTextNode()    
   }

  @HostListener('mouseenter') showTooltip() {
    this.renderer.appendChild(this.elementRef.nativeElement, this.hello);
  }

  @HostListener('mouseleave') hideTooltip() {
    this.renderer.removeChild(this.elementRef.nativeElement, this.hello);
  }

  private createTextNode() {
    this.hello = this.renderer.createElement('div');
    this.text = this.renderer.createText(this.appTooltipText);
    this.renderer.appendChild(this.hello, this.text);
    this.renderer.addClass(this.hello, 'tooltip')
    this.renderer.setStyle(this.elementRef.nativeElement, 'position', 'relative')
  }
}
