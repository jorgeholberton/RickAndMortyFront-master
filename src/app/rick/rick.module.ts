import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RickRoutingModule } from './rick-routing.module';
import { MortyComponent } from './components/morty/morty.component';
import { MaterialModule } from '../material/material.module';
import { DialogComponent } from './components/dialog/dialog.component';
import { EpisodeComponent } from './components/episode/episode.component';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [
    MortyComponent,
    DialogComponent,
    EpisodeComponent,
    
  ],
  imports: [
    CommonModule,
    RickRoutingModule,
    MaterialModule,
    MatExpansionModule
  ]
})
export class RickModule { }
