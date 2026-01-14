
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user'

@Component({
  selector: 'app-user-create',
  standalone: true,
  templateUrl: './user-create.html',
  styleUrls: ['./user-create.css'],
  imports: [FormsModule, CommonModule]
})
export class UserCreateComponent {
  user = {
    pseudo: '',
    email: '',
    password: '',
    role: 'user'
  };

  message = '';

  constructor(private userService: UserService) {}

  onsubmit() {
    this.userService.createUser(this.user).subscribe({
      next: () => {
        this.message = 'Utilisateur créé avec succès !';
        this.resetForm();
      },
      error: (err) => {
        console.error(err);
        this.message = 'Erreur lors de la création.';
      }
    });
  }

  resetForm() {
    this.user = { pseudo: '', email: '', password: '', role: 'user' };
  }
}
