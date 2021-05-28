import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DashboarduserComponent } from './component/dashboarduser/dashboarduser.component';
import { LoginComponent } from './component/login/login.component';
import { LoginuserComponent } from './component/loginuser/loginuser.component';
import { SuccessPageComponent } from './component/success-page/success-page.component';
import { UserorderComponent } from './component/userorder/userorder.component';

const routes: Routes = [
  {
    path : "",
    redirectTo: "login",
    pathMatch: "full"
  },
  { 
    path: 'login',
    component: LoginComponent
  },
{ 
  path: 'dashboard',
  component: DashboardComponent
},
{ 
  path: 'dashboarduser',
  component: DashboarduserComponent
},
{ 
  path: 'success-page',
  component: SuccessPageComponent
},
{ 
  path: 'loginuser',
  component: LoginuserComponent
},
{ 
  path: 'userorder',
  component: UserorderComponent
},

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

