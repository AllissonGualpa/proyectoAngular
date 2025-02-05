import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { AlbumComponent } from './shared/album/album.component';
import { VentanasComponent } from './shared/ventanas/ventanas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ContactoComponent, AlbumComponent, VentanasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'proyectoAngular';
}
