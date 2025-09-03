import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {
   formulario = new FormGroup({
    nombre : new FormControl('',[Validators.required,Validators.maxLength(20),Validators.minLength(3),]),
    username : new FormControl('',[Validators.required,Validators.maxLength(20),Validators.minLength(3)]),
    correo : new FormControl('',[Validators.required,Validators.email]),
    contrasenia : new FormControl('',[Validators.required,Validators.minLength(3)]),
    repetirContrasenia : new FormControl('',[Validators.required,Validators.minLength(3),this.validarContrasenias]),
  })

  ngOnInit(){
    this.formulario.valueChanges.subscribe((value)=>{
      console.log(value);
    })

    this.formulario.statusChanges.subscribe((algo) =>{
      console.log(algo);
    })

  }

  enviarFormulario(){
    console.log(this.formulario);
    console.log(this.formulario.value);
    console.log(this.formulario.get("nombre"));
  }

  validarContrasenias(control: AbstractControl):ValidationErrors | null { 
    const error = {iguales:false}

    if(!control.value){
      return error;
    }
    //para obtener el dato de la contraseña para validar si son iguales
    const contrasenia = control.parent?.get('contrasenia')?.value;

    if(!contrasenia){
      return error;
    }

    if(control.value === contrasenia){
      return null;
    }else{
      return error;
    }
  }
}
