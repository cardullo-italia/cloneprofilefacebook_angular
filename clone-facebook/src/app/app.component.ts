import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { ProfileHomeComponent } from "./profile/profile-home/profile-home.component";

@Component({
  selector: 'app-root',
  imports: [ProfileHomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clone-facebook';
}
