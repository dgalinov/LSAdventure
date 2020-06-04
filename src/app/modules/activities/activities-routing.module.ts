import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivityComponent } from './components/activity/activity.component';
import { AuthGuard } from '../../guards/auth-guard.guard';
import { NewActivityComponent } from './components/new-activity/new-activity.component';

const routes: Routes = [
    { path: 'activity', component: ActivityComponent, canActivate: [AuthGuard],
        children: [
        { path: 'new', component: NewActivityComponent, pathMatch: 'full' }
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ActivitiesRoutingModule { }