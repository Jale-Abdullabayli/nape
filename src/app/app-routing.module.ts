import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { CertificateComponent } from './certificate/certificate.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { ProjectsComponent } from './projects/projects.component';
import { PartnersComponent } from './partners/partners.component';
import { Project1Component } from './project1/project1.component';
import { Project2Component } from './project2/project2.component';

const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'company',component: CompanyComponent},
  {path:'certificate',component: CertificateComponent},
  {path:'contact',component: ContactComponent},
  {path:'services',component: ServicesComponent},
  {path:'products',component: ProductsComponent},
  {path:'projects',component: ProjectsComponent, children:[
     {path:'project1',component: Project1Component},
     {path:'',redirectTo:'project1',pathMatch:'full'},
     {path:'project2',component:Project2Component}]},
  {path:'partners',component: PartnersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
