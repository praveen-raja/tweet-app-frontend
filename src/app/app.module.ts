import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RegisterService } from './service/register.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PostTweetComponent } from './post-tweet/post-tweet.component';
import { ErrorComponent } from './error/error.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { AllTweetComponent } from './all-tweet/all-tweet.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SearchByUsernameComponent } from './search-by-username/search-by-username.component';
import { UpdateTweetComponent } from './update-tweet/update-tweet.component';
import { DeleteTweetComponent } from './delete-tweet/delete-tweet.component';
import { SearchTweetByUsernameComponent } from './search-tweet-by-username/search-tweet-by-username.component';
import { ReplyTweetComponent } from './reply-tweet/reply-tweet.component';
import { LikeTweetComponent } from './like-tweet/like-tweet.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PostTweetComponent,
    ErrorComponent,
    AllUsersComponent,
    AllTweetComponent,
    ForgotPasswordComponent,
    SearchByUsernameComponent,
    UpdateTweetComponent,
    DeleteTweetComponent,
    SearchTweetByUsernameComponent,
    ReplyTweetComponent,
    LikeTweetComponent,
    HeaderComponent,
    FooterComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
