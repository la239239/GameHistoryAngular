import { Routes } from '@angular/router';
import { UserCreateComponent } from './components/user-create/user-create';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'create-user', pathMatch: 'full' },
  { path: 'create-user', component: UserCreateComponent }
];
