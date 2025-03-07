import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileFriends } from '../../profile/types/friendsProfile';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  private apiUrl = 'http://localhost:3000/friendsPhoto';

  constructor(private http: HttpClient) { }

  getFriendsPhoto(): Observable<ProfileFriends[]> {
    return this.http.get<ProfileFriends[]>(this.apiUrl);
  }
}
