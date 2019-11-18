import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import {SignupPage} from '../pages/signup/signup';

import firebase from 'firebase';

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAQZBQOzoo9mpQ_oO3b2mQmMXiQ99bXOrg",
  authDomain: "ride-61862.firebaseapp.com",
  databaseURL: "https://ride-61862.firebaseio.com",
  projectId: "ride-61862",
  storageBucket: "ride-61862.appspot.com",
  messagingSenderId: "277818673009",
  appId: "1:277818673009:web:c9edf0da766f0f724058d0",
  measurementId: "G-5FSSNW6H16"
};

firebase.initializeApp(firebaseConfig)

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
