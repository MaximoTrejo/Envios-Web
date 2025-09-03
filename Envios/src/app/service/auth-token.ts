import { Injectable } from '@angular/core';
import { environment } from '../environment_config';

@Injectable({
  providedIn: 'root'
})
export class AuthToken {
  async refrescarToken(token: string) {

    const url = environment.API_CONTROL_URL_REFRESCAR_TOKEN;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });


    if (!response.ok) {
      console.error('Error al refrescar el token');
      return null;
    }
    const data = await response.json();
    console.error('Se refresco el token');
    return data;

  }

  async obtenerNuevoToken(code: string,token: string ) {

    const url = environment.API_CONTROL_URL_CREAR_TOKEN;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({code})
    });

    if (!response.ok) {
      console.error('Error al crear el token');
      return null;
    } 
    console.error('Se creo el token');
    const data = await response.json();
    return data;

  }

  getToken(){
    const data = localStorage.getItem('jwt');
    if (data) {
      return data;
    } else {
      return '';
    }
  }
}
