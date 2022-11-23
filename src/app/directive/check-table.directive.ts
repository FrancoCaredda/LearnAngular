import { AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCheckTable]'
})
export class CheckTableDirective implements AfterViewInit {
  @Input() public appCheckTable: Array<string> = [];
  @Input() public regex: RegExp = /^[a-zA-Z]*$/;
  @Input() public errorColor: string = "red";
  
  constructor(private element: ElementRef) { 
   
  }

  ngAfterViewInit(): void {
    if (this.appCheckTable.length == 0) {
      (<HTMLElement>this.element.nativeElement).style.border = "1px solid " + this.errorColor;
    }

    console.log(this.appCheckTable);

    for (let str of this.appCheckTable) {
      if (!str.match(this.regex)) {
        console.log("pass");
        (<HTMLElement>this.element.nativeElement).style.border = "1px solid " + this.errorColor;
      }
    }
  }
}
