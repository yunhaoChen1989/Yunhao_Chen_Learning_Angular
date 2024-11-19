import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
  standalone: true
})
export class HoverHighlightDirective {
  @Input() color:string='';
  constructor(private el:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.color || 'blue');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('');
  }

  private highlight(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }
}
