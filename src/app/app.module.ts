import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';

import { LogosComponent } from './components/logos/logos.component';
import { HomeComponent } from './components/home/home.component';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogModalComponent } from './components/log-modal/log-modal.component'


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    LogosComponent,
    HomeComponent,
    CadastrarComponent,
    LogModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }