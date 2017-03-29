import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './data/in-memory-data.service';

import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header/my-header.component';
import { NavComponent } from './components/nav/my-nav.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PostComponent } from './components/post/post.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostSearchComponent } from './components/post-search/post-search.component';

import { PostsService } from './services/posts.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    PostsListComponent,
    PostComponent,
    PostSearchComponent
  ],
  providers: [PostsService],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
