import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Bienvenue dans l’application Gamer History</h1>
    <router-outlet></router-outlet>
  `,
  imports: [RouterOutlet]
})
export class App {}
