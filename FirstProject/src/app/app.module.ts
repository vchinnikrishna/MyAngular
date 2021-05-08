import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';
// import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    // WelcomeComponent,
  ],
  imports: [
    BrowserModule,
  //  AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      
      // ,{path:'welcom' Component: WelcomeComponent}
      {path: '', redirectTo: 'welcome', pathMatch: 'full'}
      ,{path:'**', redirectTo: 'welcome', pathMatch: 'full'}

    ]),
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
