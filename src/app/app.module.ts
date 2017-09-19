import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';


import { GitComponent } from './component/git.component';
import { GitService } from './component/services/git.services';
import {TechComponent} from './component/tech.component';
import { TechService } from './component/services/tech.services';


@NgModule({
  declarations: [
    AppComponent,
    GitComponent,
    TechComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'findrepo', component: GitComponent},
      {path: 'findlanguage', component: TechComponent}
    ])
  ],
  providers: [GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }