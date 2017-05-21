import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { LocationStrategy, HashLocationStrategy } from '@angular/common'

import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import {
  RouterModule,
  Routes
} from '@angular/router';

import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: CreateUserComponent },
  { path: 'create-ticket', component: CreateUserComponent },
  { path: 'users', component: CreateUserComponent }]

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent
 ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
