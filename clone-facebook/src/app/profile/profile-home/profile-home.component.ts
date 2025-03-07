import { Component } from '@angular/core';
import { ImageCoverComponent } from "../components/image-cover/image-cover.component";
import { PartSinistraComponent } from "../components/part-sinistra/part-sinistra.component";

@Component({
  selector: 'app-profile-home',
  imports: [ImageCoverComponent, PartSinistraComponent],
  templateUrl: './profile-home.component.html',
  styleUrl: './profile-home.component.css'
})
export class ProfileHomeComponent {

}
