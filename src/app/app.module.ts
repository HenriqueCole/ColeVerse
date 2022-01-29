import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StoreComponent } from './store/store.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StoreComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path: '', component: LoginComponent, canActivate: [
        
      ]},
    ]),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]


})
export class AppModule { }
