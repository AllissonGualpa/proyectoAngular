import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { AlbumComponent } from './shared/album/album.component';
import { VentanasComponent } from './shared/ventanas/ventanas.component';
import { RecursosService } from './servicios/recursos.service';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './shared/footer/footer.component';
import { RouterLink } from '@angular/router';
import { TablaComponent } from './shared/tabla/tabla.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ContactoComponent, AlbumComponent, HttpClientModule, FooterComponent,RouterLink],
  providers: [RecursosService], //se lo pone como proveedor porque es un servicio.
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'proyectoAngular';
}
