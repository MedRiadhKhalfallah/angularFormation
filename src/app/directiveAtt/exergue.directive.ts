import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appExergue]'
})
export class ExergueDirective {

  @HostBinding('style.color') @Input() colorInput;
  @HostBinding('style.borderColor') @Input() borderColorInput;

  @HostListener('input') changeColor() {
    this.colorInput = '#'.concat(Math.floor(Math.random() * 16777215).toString(16));
    this.borderColorInput = '#'.concat(Math.floor(Math.random() * 16777215).toString(16));
  }

  constructor() {
  }

}
