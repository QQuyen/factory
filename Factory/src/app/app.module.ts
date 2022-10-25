import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SlideComponent } from './slide/slide.component';
import { Nav_menuComponent } from './nav_menu/nav_menu.component';
import { ContentComponent } from './content/content.component';
import { BottomComponent } from './bottom/bottom.component';

@NgModule({
  declarations: [					
    AppComponent,
      HeaderComponent,
      SlideComponent,
      Nav_menuComponent,
      ContentComponent,
      BottomComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
