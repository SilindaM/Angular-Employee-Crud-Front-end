import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {  FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './Compontents/create/create.component';
import { ListComponent } from './Compontents/list/list.component';
import { DetailsComponent } from './Compontents/details/details.component';
import { UpdateEmployeeComponent } from './Compontents/update-employee/update-employee.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ListComponent,
    DetailsComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
