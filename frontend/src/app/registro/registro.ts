import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';
import { RolesService } from '../services/roles.service';


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro implements OnInit {

  nombre = '';
  apellido = '';
  email = '';
  password = '';
  telefono = '';
  rol_id: number | null = null;

  roles = [
    { id: 1, nombre: 'Cliente' },
    { id: 2, nombre: 'Vendedor' },
    { id: 3, nombre: 'Trabajador' },
    { id: 4, nombre: 'Administrador' }
  ];


  constructor(
    private router: Router,
    private usuariosService: UsuariosService,
    private rolesService: RolesService
  ) {}

  ngOnInit() {
    this.rolesService.obtenerRoles().subscribe((data) => {
      this.roles = data;
    });
  }

  registrar() {
    const usuario = {
      nombre: this.nombre,
      apellido: this.apellido,
      email: this.email,
      password: this.password,
      telefono: this.telefono,
      rol_id: this.rol_id
    };

    
    this.usuariosService.registrar(usuario).subscribe({
      next: () => {
        alert('Usuario registrado');
        this.router.navigate(['/login']);
      },
      error: () => {
        alert('Error al registrar');
      }
    });
  }
  irLogin() {
  this.router.navigate(['/login']);
  }
}

