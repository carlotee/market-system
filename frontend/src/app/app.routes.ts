import { Routes } from '@angular/router';

// Importaciones de los componentes
import { Login } from './login/login';
import { Registro } from './registro/registro';
import { Perfilusuario } from './perfilusuario/perfilusuario'; // Corregido
import { CarritoVentas } from './carrito-ventas/carrito-ventas';
import { Listarproducto } from './listarproducto/listarproducto';
import { Crearproducto } from './crearproducto/crearproducto';

export const routes: Routes = [
    { path: '', component: Login },
    { path: 'login', component: Login },
    { path: 'registro', component: Registro },
    { path: 'usuario', component: Perfilusuario },
    { path: 'carrito', component: CarritoVentas },
    { path: 'productos', component: Listarproducto },
    { path: 'crear-producto', component: Crearproducto },
    
    // Ruta comodín para redirigir si la URL no existe (opcional)
    { path: '**', redirectTo: '', pathMatch: 'full' }
];