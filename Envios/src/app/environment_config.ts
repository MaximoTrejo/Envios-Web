const API_CONTROL_URL = 'http://localhost:667';

export const environment = {
  CLIENT_ID: '5174586942693408',
  URL_REDIRECCIONAMIENTO_ML:'https://maximotrejo.github.io/app_envios/web/html/dashboard.html',
  API_CONTROL_URL,
  API_CONTROL_URL_LOGIN: `${API_CONTROL_URL}/login`,
  API_CONTROL_URL_CREAR_TOKEN: `${API_CONTROL_URL}/Token/insertarToken`,
  API_CONTROL_URL_REFRESCAR_TOKEN: `${API_CONTROL_URL}/Token/validarToken`
};

