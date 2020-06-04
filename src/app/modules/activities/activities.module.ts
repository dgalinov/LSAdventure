import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { RouterModule } from '@angular/router';
import { NewActivityComponent } from './components/new-activity/new-activity.component';
import { ActivityComponent } from './components/activity/activity.component';
import { DeleteActivityComponent } from './components/delete-activity/delete-activity.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        NewActivityComponent,
        ActivityComponent,
        DeleteActivityComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        AngularFireModule,
        RouterModule,
        FormsModule
    ]
})
export class ActivitiesModule { }