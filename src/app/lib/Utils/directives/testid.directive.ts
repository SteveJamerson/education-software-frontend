import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
   selector: '[testid]',
})
export class TestIdDirective implements OnInit {
   @Input() set testid(name: string) {
      this._name = name;
   }
   _name: string = '';

   constructor(private elementRef: ElementRef<HTMLElement>) {}

   ngOnInit(): void {
      this.on();
   }

   on() {
      const { id, nodeName } = this.elementRef.nativeElement;
      const name =
         this._name || nodeName.replace(/^UI-/, '').toLocaleLowerCase();
      const test = `testid-${name}-${id}`;
      this.elementRef.nativeElement.setAttribute(
         'data-testid',
         test.endsWith('-') ? test.slice(0, -1) : test
      );
   }
}
