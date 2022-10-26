import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { CancellationComponent } from './components/cancellation/cancellation.component';

const routes: Routes = [{path:'',redirectTo:'register',pathMatch:'full'},
 {path: 'login', component:LoginComponent},
  {path:'register', component:RegisterComponent },
  {path: 'reservation', component:ReservationComponent},
  {path: 'cancellation', component:CancellationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

