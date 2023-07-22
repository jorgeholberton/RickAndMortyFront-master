/* en appmodule.ts se hace la importación de HttpClientModule para
manejar el http. 
El header cuando se hace una llamada a un servidor externo, es el que
conoce en que formato va a ser retornado, en este caso como jason
lineas:
headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
*/
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://rickandmortyapi.com/api'; /* url base, solo cambia el endpoint, final */
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  }
/* en el contructor instanciar un objeto llamado http de tipo HttpClient */
  constructor(private http: HttpClient) {}

  /* se utiliza el objeto hhttp creado anteriormente con el metodo get. Como parametro
  tiene la dirección url base adicionandole character que corresponde al endpoint. Retorna
  un observable. Lo usa morty.component.ts del componente morty */
  getCharacters() 
  {
    return this.http.get(this.baseUrl+'/character', this.options);
  }

   getEpisode()
  {
    return this.http.get(this.baseUrl+'/episode', this.options);
  } 


}
