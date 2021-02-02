import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {AuthModule} from './components/auth/auth.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {JwtInterceptor} from './core/interceptors/jwt.interceptor';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {MenubarModule} from 'primeng/menubar';
import { MainViewComponent } from './components/main-views/main-view/main-view.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { GradjaninViewComponent } from './components/main-views/gradjanin-view/gradjanin-view.component';
import {TableModule} from 'primeng/table';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {PregledObavestenjaComponent} from './components/pregled-obavestenja/pregled-obavestenja.component';
import { ObavestenjePrikazComponent } from './components/obavestenje-prikaz/obavestenje-prikaz.component';
import {PoverenikViewComponent} from './components/main-views/poverenik-view/poverenik-view.component';
import {CardModule} from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IzborZahtevaComponent} from './components/izbor-zahteva/izbor-zahteva.component';
import { PodnosenjeZalbeCutanjeComponent } from './components/podnosenje-zalbe-cutanje/podnosenje-zalbe-cutanje.component';
import {PregledZalbiCutanjeComponent} from './components/pregled-zalbi-cutanje/pregled-zalbi-cutanje.component';
import {ZalbaCutanjePrikazComponent} from './components/zalba-cutanje-prikaz/zalba-cutanje-prikaz.component';
import {PodnosenjeZalbeNaOdlukuComponent} from './components/podnosenje-zalbe-na-odluku/podnosenje-zalbe-na-odluku.component';
import {PregledZalbiNaOdlukuComponent} from './components/pregled-zalbi-na-odluku/pregled-zalbi-na-odluku.component';
import {ZalbaNaOdlukuPrikazComponent} from './components/zalba-na-odluku-prikaz/zalba-na-odluku-prikaz.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    GradjaninViewComponent,
    PoverenikViewComponent,
    PregledObavestenjaComponent,
    PregledZalbiCutanjeComponent,
    ObavestenjePrikazComponent,
    IzborZahtevaComponent,
    PodnosenjeZalbeCutanjeComponent,
    ZalbaCutanjePrikazComponent,
    PodnosenjeZalbeNaOdlukuComponent,
    PregledZalbiNaOdlukuComponent,
    ZalbaNaOdlukuPrikazComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ToastModule,
    MenubarModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    ScrollPanelModule,
    CardModule,
    DropdownModule,
    ProgressSpinnerModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
