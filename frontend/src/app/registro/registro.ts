import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {

  nombre = '';
  apellido = '';
  correo = '';
  password = '';
  telefono = '';

  constructor(
    private router: Router,
    private usuariosService: UsuariosService
  ) {}

  registrar() {
    const usuario = {
      nombre: this.nombre,
      apellido: this.apellido,
      correo: this.correo,
      password: this.password,
      telefono: this.telefono
    };

    this.usuariosService.registrar(usuario).subscribe({
      next: () => {
        alert('Usuario registrado');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error(err);
        alert('Error al registrar');
      }
    });
  }

  irLogin() {
    this.router.navigate(['/login']);
  }
}
