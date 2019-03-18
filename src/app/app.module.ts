import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

import {MatInputModule, 
        MatCardModule, 
        MatButtonModule, 
        MatToolbarModule, 
        MatExpansionModule, 
        MatProgressSpinnerModule} from '@angular/material';

import { SneakerPostCreateComponent } from './sneaker-posts/sneaker-post-create/sneaker-post-create.component';
import { HeaderComponent } from './sneaker-posts/header/header.component';
import { SneakerCatalogComponent } from './sneaker-posts/sneaker-catalog/sneaker-catalog.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing-module';


@NgModule({
  declarations: [
    AppComponent,
    SneakerPostCreateComponent,
    HeaderComponent,
    SneakerCatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
