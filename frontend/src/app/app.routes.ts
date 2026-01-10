import { Routes } from '@angular/router';


import { Login } from './login/login';
import { Registro } from './registro/registro';
import { Perfilusuario } from './perfilusuario/perfilusuario'; 
import { CarritoVentas } from './carrito-ventas/carrito-ventas';
import { Listarproducto } from './listarproducto/listarproducto';
import { Crearproducto } from './crearproducto/crearproducto';
import { Editarproducto } from './editarproducto/editarproducto';

export const routes: Routes = [
    { path: '', component: Login },
    { path: 'login', component: Login },
    { path: 'registro', component: Registro },
    { path: 'usuario', component: Perfilusuario },
    { path: 'carrito', component: CarritoVentas },
    { path: 'productos', component: Listarproducto },
    { path: 'crear-producto', component: Crearproducto },
    { path: 'editar-producto/:id', component: Editarproducto },
    
    { path: '**', redirectTo: '', pathMatch: 'full' }
];