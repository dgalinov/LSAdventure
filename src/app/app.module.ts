import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ActivitiesModule } from './modules/activities/activities.module';
import { LoginModule } from './modules/login/login.module';
import { NotFoundComponent } from './modules/login/components/not-found/not-found.component';
import { LoginComponent } from './modules/login/components/login/login.component';
import { LoginRoutingModule } from './modules/login/login-routing.module';
import { ActivitiesRoutingModule } from './modules/activities/activities-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    ActivitiesModule,
    LoginModule,    
    LoginRoutingModule,
    ActivitiesRoutingModule,
    AppRoutingModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
