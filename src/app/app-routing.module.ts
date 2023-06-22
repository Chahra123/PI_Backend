import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AdminComponent } from './admin/admin.component';
import { OrganisateurComponent } from './organisateur/organisateur.component';
import { ClientComponent } from './client/client.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from 'src/app/_auth/auth.guard';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent , canActivate:[AuthGuard],data:{roles:['ADMIN']}},
  { path: 'organisateur', component: OrganisateurComponent , canActivate:[AuthGuard],data:{roles:['ORGANISATEUR']}},
  { path: 'client', component: ClientComponent , canActivate:[AuthGuard],data:{roles:['CLIENT']}},
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UserListComponent , canActivate:[AuthGuard],data:{roles:['ADMIN']}},
  { path: 'users/create', component: CreateUserComponent , canActivate:[AuthGuard],data:{roles:['ADMIN']}},
  { path: 'users/update/:id', component: UpdateUserComponent , canActivate:[AuthGuard],data:{roles:['ADMIN']}},
  { path: 'users/details/:id', component: UserDetailsComponent , canActivate:[AuthGuard],data:{roles:['ADMIN']}},
  { path: 'forbidden', component: ForbiddenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
