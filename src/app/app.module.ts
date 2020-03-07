import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { HVTextoComponent } from './components/hvtexto/hvtexto.component';
import { ShowHistoriaVidaTextoComponent } from './historiaVidaTexto/show-historia-vida-texto/show-historia-vida-texto.component';
import { EditHistoriaVidaTextoComponent } from './historiaVidaTexto/edit-historia-vida-texto/edit-historia-vida-texto.component';
import { AddHistoriaVidaTextoComponent } from './historiaVidaTexto/add-historia-vida-texto/add-historia-vida-texto.component';
import { HistoriaVidaTextoComponent } from './historia-vida-texto/historia-vida-texto.component';
import { AddHistoriaVidaAudioComponent } from './historiaVidaAudio/add-historia-vida-audio/add-historia-vida-audio.component';
import { EditHistoriaVidaAudioComponent } from './historiaVidaAudio/edit-historia-vida-audio/edit-historia-vida-audio.component';
import { ShowHistoriaVidaAudioComponent } from './historiaVidaAudio/show-historia-vida-audio/show-historia-vida-audio.component';
import { HistoriaVidaAudioComponent } from './historia-vida-audio/historia-vida-audio.component';
import { HistoriaVidaVideoComponent } from './historia-vida-video/historia-vida-video.component';
import { EditHistoriaVidaVideoComponent } from './historiaVidaVideo/edit-historia-vida-video/edit-historia-vida-video.component';
import { AddHistoriaVidaVideoComponent } from './historiaVidaVideo/add-historia-vida-video/add-historia-vida-video.component';
import { ShowHistoriaVidaVideoComponent } from './historiaVidaVideo/show-historia-vida-video/show-historia-vida-video.component';

@NgModule({
  declarations: [
    AppComponent,
    HVTextoComponent,
    ShowHistoriaVidaTextoComponent,
    EditHistoriaVidaTextoComponent,
    AddHistoriaVidaTextoComponent,
    HistoriaVidaTextoComponent,
    AddHistoriaVidaAudioComponent,
    EditHistoriaVidaAudioComponent,
    ShowHistoriaVidaAudioComponent,
    HistoriaVidaAudioComponent,
    HistoriaVidaVideoComponent,
    EditHistoriaVidaVideoComponent,
    AddHistoriaVidaVideoComponent,
    ShowHistoriaVidaVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
