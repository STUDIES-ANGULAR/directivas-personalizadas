import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {
  htmlElement: ElementRef<HTMLElement>;
  @Input('colorError') color: string = 'red';
  @Input('mensajeError') mensaje: string = 'campo obligatorio';

  constructor( private el: ElementRef<HTMLElement> ) { 
    // creamos la referencia al nativeElement
    this.htmlElement = el;
  }
  ngOnChanges(changes: SimpleChanges): void {

    if (changes['mensaje']){
      const mensaje = changes['mensaje']?.currentValue;
      this.htmlElement.nativeElement.innerText = mensaje;
    }
    
    if (changes['color']){
      const color = changes['color']?.currentValue;
      this.htmlElement.nativeElement.style.color = color;
    }

  }

  ngOnInit(): void {
    console.log('ng oninit directiva');
    this.setColor();
    this.setMensajeError();
    this.setClass();
  }
  
  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.color;
  }

  setMensajeError(): void {
    this.htmlElement.nativeElement.innerText = this.mensaje;
  }

  setClass(): void{
    this.htmlElement.nativeElement.classList.add('form-text');
  }
}
