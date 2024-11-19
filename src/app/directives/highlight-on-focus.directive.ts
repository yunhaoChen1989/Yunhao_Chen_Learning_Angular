import {Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]',
  standalone: true
})
export class HighlightOnFocusDirective{
  @Input() border:string='';
  constructor(private el:ElementRef) { }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(this.el.nativeElement.hasFocus())
  //   if(this.el.nativeElement.hasFocus()){
  //     this.setBorder(this.border || '2px solid black');
  //   }else{
  //     this.setBorder('');
  //   }
  // }

  @HostListener('focus') onFocus(){
    this.setBorder(this.border || '5px solid green');
  }
  @HostListener('blur') lostFocus(){
    this.setBorder('');
  }
  private setBorder(border:string){
    console.log(border)
    this.el.nativeElement.style.border = border
  }
}
