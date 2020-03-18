import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './main/auth/login/login.component';
import { HomeComponent } from './main/pages/home/home.component';
import { MovieComponent } from './main/pages/movie/movie.component';
import { AdminHomeComponent } from './main/pages/admin/admin-home/admin-home.component';
import { AdminTheaterComponent } from './main/pages/admin/admin-theater/admin-theater.component';
import { AdminRoomsComponent } from './main/pages/admin/admin-rooms/admin-rooms.component';
import { NewAdminTheaterComponent } from './main/pages/admin/new/new-admin-theater/new-admin-theater.component';
import { NewAdminRoomComponent } from './main/pages/admin/new/new-admin-room/new-admin-room.component';
import { NewAdminHourComponent } from './main/pages/admin/new/new-admin-hour/new-admin-hour.component';
import { AdminHoursComponent } from './main/pages/admin/admin-hours/admin-hours.component';

const routes: Routes = [
  {
    path: 'auth/login', component: LoginComponent
  },
  {
    path: 'inicio', component: HomeComponent
  },
  {
    path: 'admin/home', component: AdminHomeComponent
  },
  {
    path: 'admin/rooms', component: AdminRoomsComponent
  },
  {
  path: 'admin/rooms/:id', component: NewAdminRoomComponent
  },
  {
    path: 'admin/theater', component: AdminTheaterComponent
  },
  {
    path: 'admin/theater/:id', component: NewAdminTheaterComponent
  },
  {
    path: 'pelicula/:id', component: MovieComponent
  },
  {
    path: 'admin/hours', component: AdminHoursComponent
  },
  {
  path: 'admin/hours/:id', component: NewAdminHourComponent
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
