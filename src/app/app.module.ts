import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { PlayersService } from './players.service';
import { AgePipe } from './age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
