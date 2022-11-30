import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {
  
  mensaje: string = 'Debe llenar el campo';
  color: string = 'red';

  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', Validators.required ]
  });

  constructor( private fb: FormBuilder ) { }
  
  tieneError ( campo: string ): boolean {
    return this.miFormulario.get( campo )?.invalid || false;
  }

  cambiarMensaje(): void {
    this.mensaje = 'mensaje cambiado';
  }

  cambiarColor(){
    this.color = 'green';

  }
}
