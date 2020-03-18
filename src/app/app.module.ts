import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './main/pages/home/home.component';
import { AboutComponent } from './main/pages/about/about.component';
import { LoginComponent } from './main/auth/login/login.component';
import { StoreComponent } from './main/auth/store/store.component';
import { CardsComponent } from './components/shared/cards/cards.component';
import { RoomComponent } from './components/shared/room/room.component';
import { BannerComponent } from './components/shared/banner/banner.component';
import { MovieComponent } from './main/pages/movie/movie.component';
import { CinemasComponent } from './components/shared/cinemas/cinemas.component';
import { AdminHomeComponent } from './main/pages/admin/admin-home/admin-home.component';
import { AdminTheaterComponent } from './main/pages/admin/admin-theater/admin-theater.component';
import { AdminHeaderComponent } from './main/pages/admin/components/admin-header/admin-header.component';
import { AdminRoomsComponent } from './main/pages/admin/admin-rooms/admin-rooms.component';
import { NewAdminTheaterComponent } from './main/pages/admin/new/new-admin-theater/new-admin-theater.component';
import { NewAdminRoomComponent } from './main/pages/admin/new/new-admin-room/new-admin-room.component';
import { NewAdminHourComponent } from './main/pages/admin/new/new-admin-hour/new-admin-hour.component';
import { AdminHoursComponent } from './main/pages/admin/admin-hours/admin-hours.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    StoreComponent,
    CardsComponent,
    RoomComponent,
    BannerComponent,
    MovieComponent,
    CinemasComponent,
    AdminHomeComponent,
    AdminTheaterComponent,
    AdminHeaderComponent,
    AdminRoomsComponent,
    NewAdminTheaterComponent,
    NewAdminRoomComponent,
    NewAdminHourComponent,
    AdminHoursComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
