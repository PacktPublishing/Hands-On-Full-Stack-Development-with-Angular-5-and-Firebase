import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PageNotFoundComponent} from './notfound/page-not-found.component';
import {AboutComponent} from './about/about.component';

export const ROUTES: Routes = [
  {path: 'app-friends-about', component: AboutComponent, pathMatch: 'full'},
  {path: '**', redirectTo: 'app-friends-page-not-found'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      ROUTES
    )],
  exports: [
    RouterModule
  ]
})
export class AppRouting {
}

