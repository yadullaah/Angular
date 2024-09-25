import { Directive, ElementRef, Input, OnInit } from '@angular/core'; 
 
@Directive({ 
  selector: '[appCustom]' 
}) 
export class CustomDirective implements OnInit { 
 
  @Input() customColor!:String; 
 
  constructor(private element:ElementRef) { } 
  ngOnInit(): void { 
    // throw new Error('Method not implemented.'); 
    this.element.nativeElement.style.background = this.customColor; 
  } 
 
}