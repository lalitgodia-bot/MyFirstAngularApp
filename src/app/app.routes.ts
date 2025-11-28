import { Routes } from '@angular/router';
import { About } from './Components/about/about';
import { Contact } from './Components/contact/contact'; 
import { Cakes } from './Components/cakes/cakes';
export const routes: Routes = [{ path: '', component:About },{ path: 'about', component: About },
      { path: 'contact', component: Contact },{path:'cakes',component:Cakes}];
