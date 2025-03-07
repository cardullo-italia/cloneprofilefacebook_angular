import { Component } from '@angular/core';
import { ProfileFriends } from '../../types/friendsProfile';
import { CommonModule } from '@angular/common';
import { FriendsService } from '../../../service/serviceFriends/friends.service';

@Component({
  selector: 'app-part-sinistra',
  imports: [CommonModule],
  templateUrl: './part-sinistra.component.html',
  styleUrl: './part-sinistra.component.css'
})
export class PartSinistraComponent {
  friendsPhoto: ProfileFriends[] = [];

  constructor(private friendsService:FriendsService) {}

  async ngOnInit(){
    this.friendsService.getFriendsPhoto().subscribe({
      next: (data) => { this.friendsPhoto = data; },
      error: (error) => { console.error('Errore nel get delle foto', error); },
      complete: () => { console.log('Richiesta completata'); } // opzionale
    });
  }
}
