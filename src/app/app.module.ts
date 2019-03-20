import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { CustomersPage } from '../pages/customers/customers';
import { DetailPage } from '../pages/detail/detail';
import { LoginPage } from '../pages/login/login';
import { CommentsPage } from '../pages/comments/comments';
import { RegisterPage } from '../pages/register/register';
import { ProviderJsonProvider } from '../providers/provider-json/provider-json';
import { HttpClientModule } from '@angular/common/http';
import { TestServiceProvider } from '../providers/test-service/test-service';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    CustomersPage,
    DetailPage,
    LoginPage,
    CommentsPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CustomersPage,
    DetailPage,
    LoginPage,
    CommentsPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProviderJsonProvider,
    TestServiceProvider
  ]
})
export class AppModule {}
