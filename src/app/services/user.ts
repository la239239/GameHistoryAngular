
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  // ✅ URL API ASP.NET Core (port correct)
  private apiUrl = 'http://localhost:5279/users';

  constructor(private http: HttpClient) {}

  /**
   * Crée un nouvel utilisateur via l'API
   * @param user Objet contenant pseudo, email, password, role
   */
  createUser(user: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, user, { headers });
  }
}
