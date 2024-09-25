import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHoverChange]'
})
export class HoverChangeDirective {

  constructor() { }

  @HostBinding("style.backgroundColor") bgColor:string="";



}
