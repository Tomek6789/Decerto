import { Component, ElementRef, forwardRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export enum GridArea {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F'
}
export type GridAreaTypes = keyof typeof GridArea

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [     
    {       
      provide: NG_VALUE_ACCESSOR, 
      useExisting: forwardRef(() => ProductComponent),
      multi: true     
    } 
  ]
})
export class ProductComponent implements ControlValueAccessor {
  @Input() name: string  = ''
  @Input() tooltipText: string = ''
  @Input() active: boolean = false
  @Input() gridArea: GridAreaTypes = 'A';

  @HostBinding('class.active') get isActive(): boolean {
    return this.active
  }

  @HostListener('click') onClick() {
    this.onChange({ name: this.name, description: this.tooltipText })
  }

  constructor(private render:Renderer2, private elementRef: ElementRef) { }

  ngOnInit() {
    this.render.addClass(this.elementRef.nativeElement, this.gridArea)
  }

  onChange: any = () => {}


  registerOnChange(fn: any) {
    this.onChange = fn
  }

  writeValue(value: any) {  }

  registerOnTouched() {}
}
