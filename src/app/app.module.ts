import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
import { MyHeaderComponent } from './components/header/my-header.component';
import { MyNavComponent } from './components/nav/my-nav.component';
@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    MyHeaderComponent,
    MyNavComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
