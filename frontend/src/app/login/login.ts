import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  correo: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    console.log('Correo:', this.correo);
    console.log('Password:', this.password);

    // aquí luego conectarás con Node.js y veras que funcionara :V
    alert('Login funcionando');
  }

  irRegistro() {
    this.router.navigate(['/registro']);
  }
}
