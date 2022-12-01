import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color: string = 'red';
  private _mensaje: string = 'Este campo es requerido';

  htmlElement: ElementRef<HTMLElement>;
  
  // @Input('colorError') color: string = 'red';
  
  @Input('colorError') set color( valor: string) {
      this.htmlElement.nativeElement.style.color = valor;
      this._color = valor;
    }
    
    // @Input('mensajeError') mensaje: string = 'campo obligatorio';
    @Input('mensajeError') set mensaje ( valor: string){
      this.htmlElement.nativeElement.innerText = valor;
      this._mensaje = valor;
  }

  constructor( private el: ElementRef<HTMLElement> ) { 
    // creamos la referencia al nativeElement
    this.htmlElement = el;
  }
  ngOnChanges(changes: SimpleChanges): void {

    // if (changes['mensaje']){
    //   const mensaje = changes['mensaje']?.currentValue;
    //   this.htmlElement.nativeElement.innerText = mensaje;
    // }
    
    // if (changes['color']){
    //   const color = changes['color']?.currentValue;
    //   this.htmlElement.nativeElement.style.color = color;
    // }

  }

  ngOnInit(): void {

    // console.log(this.color); //undefined
    // console.log(this.mensaje);  // undefined

    // this.setColor();
    // this.setMensajeError();
    // this.setClass();
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
