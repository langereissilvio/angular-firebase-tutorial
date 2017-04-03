import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCOlTNqVauVvv33wPwmedKJBGjZn6yJcxs",
  authDomain: "angular-2-tut-acd3f.firebaseapp.com",
  databaseURL: "https://angular-2-tut-acd3f.firebaseio.com",
  projectId: "angular-2-tut-acd3f",
  storageBucket: "angular-2-tut-acd3f.appspot.com",
  messagingSenderId: "866085153741"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
