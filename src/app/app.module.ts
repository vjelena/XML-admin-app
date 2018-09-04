import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgentComponent } from './agent/agent.component';

import { AgentServiceService } from './agent-service.service';

import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { ExtraComponent } from './extra/extra.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    AgentComponent,
    UserComponent,
    ExtraComponent,
    LoginComponent,
    HomepageComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AgentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
