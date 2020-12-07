import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CertificateComponent } from './certificate/certificate.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { PartnersComponent } from './partners/partners.component';
import { Project1Component } from './project1/project1.component';
import { Project2Component } from './project2/project2.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    CertificateComponent,
    ContactComponent,
    ProductsComponent,
    ProjectsComponent,
    ServicesComponent,
    PartnersComponent,
    Project1Component,
    Project2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
