import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTweetComponent } from './all-tweet/all-tweet.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { DeleteTweetComponent } from './delete-tweet/delete-tweet.component';
import { ErrorComponent } from './error/error.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LikeTweetComponent } from './like-tweet/like-tweet.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PostTweetComponent } from './post-tweet/post-tweet.component';
import { RegisterComponent } from './register/register.component';
import { ReplyTweetComponent } from './reply-tweet/reply-tweet.component';
import { SearchByUsernameComponent } from './search-by-username/search-by-username.component';
import { SearchTweetByUsernameComponent } from './search-tweet-by-username/search-tweet-by-username.component';
import { RouteGuardService } from './service/route-guard.service';
import { UpdateTweetComponent } from './update-tweet/update-tweet.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'forgotPassword',component:ForgotPasswordComponent},
  {path:'searchByUsername',component:SearchByUsernameComponent,canActivate:[RouteGuardService]},
  {path:'allUsers',component:AllUsersComponent,canActivate:[RouteGuardService]},
  {path:'allTweet',component:AllTweetComponent,canActivate:[RouteGuardService]},
  {path:'postTweet',component:PostTweetComponent,canActivate:[RouteGuardService]},
  {path:'updateTweet',component:UpdateTweetComponent,canActivate:[RouteGuardService]},
  {path:'deleteTweet',component:DeleteTweetComponent,canActivate:[RouteGuardService]},
  {path:'searchTweetByUsername',component:SearchTweetByUsernameComponent,canActivate:[RouteGuardService]},
  {path:'replyTweet',component:ReplyTweetComponent,canActivate:[RouteGuardService]},
  {path:'likeTweet',component:LikeTweetComponent,canActivate:[RouteGuardService]},
  {path:'logout',component:LogoutComponent,canActivate:[RouteGuardService]},
  {path:'error',component:ErrorComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
