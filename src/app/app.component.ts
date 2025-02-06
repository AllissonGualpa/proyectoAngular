import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { AlbumComponent } from './shared/album/album.component';
import { VentanasComponent } from './shared/ventanas/ventanas.component';
import { RecursosService } from './servicios/recursos.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ContactoComponent, AlbumComponent, VentanasComponent, HttpClientModule],
  providers: [RecursosService], //se lo pone como proveedor porque es un servicio.
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'proyectoAngular';
  constructor(private recursosService: RecursosService){}
}
