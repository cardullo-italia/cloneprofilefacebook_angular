import { Component } from '@angular/core';
import { ImageCoverComponent } from "../components/image-cover/image-cover.component";
import { PartSinistraComponent } from "../components/part-sinistra/part-sinistra.component";
import { PartDestraComponent } from "../components/part-destra/part-destra.component";

@Component({
  selector: 'app-profile-home',
  imports: [ImageCoverComponent, PartSinistraComponent, PartDestraComponent],
  templateUrl: './profile-home.component.html',
  styleUrl: './profile-home.component.css'
})
export class ProfileHomeComponent {

}
