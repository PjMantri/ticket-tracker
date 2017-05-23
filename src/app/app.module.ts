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
import { HomeComponent } from './home/home.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { UsersComponent } from './users/users.component';
import { TicketComponent } from './ticket/ticket.component';
import { UserComponent } from './user/user.component';
import {UsersService} from './users/users.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'create-ticket', component: CreateTicketComponent },
  { path: 'users', component: UsersComponent }]

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    HomeComponent,
    CreateTicketComponent,
    UsersComponent,
    TicketComponent,
    UserComponent
 ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    UsersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
