import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from "./result/result.component";
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  { path: 'result', component: HeaderComponent },
  { path: 'index', component: HeaderComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },    
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
  
}
