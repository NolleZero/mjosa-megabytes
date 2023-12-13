import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { TabsComponent } from './tabs/tabs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { KartComponent } from './kart/kart.component';
import { GoogleMapsModule} from '@angular/google-maps';
import { OmOssComponent } from './om-oss/om-oss.component';
import { KontaktskjemaComponent } from './kontaktskjema/kontaktskjema.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { KundereferanserComponent } from './kundereferanser/kundereferanser.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    TabsComponent,
    KartComponent,
    OmOssComponent,
    KontaktskjemaComponent,
    KundereferanserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    GoogleMapsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
