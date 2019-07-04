import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {BooklistPage} from "../pages/booklist/booklist";
import {CdlistPage} from "../pages/cdlist/cdlist";
import {ListServices} from "../services/list.services";
import {Lendcdpage} from "../pages/lendcdpage/lendcdpage";
import {Lendbookpage} from "../pages/lendbookpage/lendbookpage";
import {SettingsPage} from "../pages/settings/settings";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    BooklistPage,
    CdlistPage,
    Lendcdpage,
    Lendbookpage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    BooklistPage,
    CdlistPage,
    Lendcdpage,
    Lendbookpage,
    SettingsPage
  ],
  providers: [
    ListServices,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
