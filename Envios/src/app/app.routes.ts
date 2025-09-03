import { Routes } from '@angular/router';

export const routes: Routes = [

    {path: "",loadComponent: () => import("./pages/home/home").then((module)=> module.Home)},
    {path: "Login",loadComponent: () => import("./pages/login/login").then((module)=> module.Login)},
    {path: "registro",loadComponent: () => import("./pages/registro/registro").then((module)=> module.Registro)},
    {path: "***",loadComponent: () => import("./pages/error/error").then((module)=> module.Error)},

];
