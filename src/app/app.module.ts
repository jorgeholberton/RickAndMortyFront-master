import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule /* permite la conexión por http con las apis,
     se importa en la linea 7, se usan en api.services.ts  HttpClient 
     y HttpHeaders */
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
