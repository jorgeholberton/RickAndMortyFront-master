import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-morty',
  templateUrl: './morty.component.html',
  styleUrls: ['./morty.component.scss']
})

/* cuando se inicia el OnInit utiliza al ngOnInit para inicializar el servicio*/
export class MortyComponent implements OnInit {
  public characters: any;/*variable de tipo caracter any cualquiera, inicialmente vacia*/

  /* se instacia el servicio, nombre apiService, de tipo ApiService en mayúscula inicial
  MatDailog es la ventana emergente con los personajes, Se intancia el objeto dailog de  
  tipo MatDialog como publico para que se puedar ver desde el exterior */
  constructor(private apiService: ApiService, public dialog: MatDialog) { }

  /* se realiza la llamada a la api con el objeto apiService creado arriba, llamando al metodo
  getCharacters() que se encuentra en api.service.ts this.apiService.getCharacters()
  Con subscribe nos suscribirlo al observable y le da un formato a la respuesta con una función
  flecha*/
  ngOnInit(): void
   {
      this.apiService.getCharacters().subscribe((data) => {
        console.log(data);/* ver en la consola del navegador la data que esta llegando */
        this.characters = data; /* la data que llega se guarda en la variable characters de tipo any,
        pasar al morty.component.html*/
      });

    /*parte modificada*/
    this.apiService.getEpisode().subscribe((data) => {
    console.log(data);/* ver en la consola del navegador la data que estan llegando */
    this.characters = data; /* la data que llega se guarda en la variable characters de tipo any,
    pasar al morty.component.html*/
    });

  }

  
  openDialog(character: any) 
  {
    /* en el constructor se instancio tambien un objeto publico dialog de tipo MatDialog 
    el método open recibe un componente y un objeto con los datos que van a llegar en caharacter
     de tipo any. Se esta utilizando el  componente DialogComponent dentro del componente MortyComponent.
     pasar al dialog.component.html del componente dialog*/
    this.dialog.open(DialogComponent,
      {
        data: 
        {
          character
        },
      });

  }

}
