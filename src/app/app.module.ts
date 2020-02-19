import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AcuariosComponent } from './acuarios/acuarios.component';
import { BettasComponent } from './bettas/bettas.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'bettas',    component: BettasComponent },
  { path: 'acuarios',  component: AcuariosComponent }
];

export class AppRoutingModule {}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcuariosComponent,
    BettasComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
