import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color: string = 'red';
  private _mensaje: string = 'Este campo es requerido';

  htmlElement: ElementRef<HTMLElement>;

  // @Input('colorError') color: string = 'red';
  // @Input('mensajeError') mensaje: string = 'campo obligatorio';


  //se ejecuta solo si cambian el valor cuando ya se contruye el componente
  @Input('colorError') set color(valor: string) {
    this._color = valor;
    this.setColor();
  }
  @Input('mensajeError') set mensaje(valor: string) {
    this._mensaje = valor;
    this.setMensajeError();
  }

  @Input('valido') set valido ( campoValido: boolean ){
    console.log(campoValido);
    if( campoValido ){
    //  this.htmlElement.nativeElement.innerText = '';  //opcion 1
     this.htmlElement.nativeElement.classList.add('hidden'); //opcion 2
    }else{
    //  this.htmlElement.nativeElement.innerText = this._mensaje; //opcion 1
     this.htmlElement.nativeElement.classList.remove('hidden'); //opcion 2
    }
  }

  constructor(private el: ElementRef<HTMLElement>) {
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

    this.setColor();
    this.setMensajeError();
    this.setClass();
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensajeError(): void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }

  setClass(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }
}
