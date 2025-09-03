import { Injectable } from '@angular/core';
import { environment } from '../environment_config';

@Injectable({
  providedIn: 'root'
})
export class AuthUsuario {
  private apiUrl = environment.API_CONTROL_URL_LOGIN;

  async login(usuario: string, clave: string) {
    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({usuario,clave })
      });

      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }

      const data = await response.json();
      return data;

    } catch (error) {

      console.error('Error en login:', error);
      throw error;
    }
  }

  async rediriguirML() {
    const clientId = environment.CLIENT_ID;
    const redirectUri = environment.URL_REDIRECCIONAMIENTO_ML;
    window.location.href = `https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;
  }
}
