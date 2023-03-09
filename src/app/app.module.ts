import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobListingComponent } from 'src/componnents/job-listing/job-listing.component';
import { CreateJobComponent } from 'src/componnents/create-job/create-job.component';
import { JobEditComponent } from 'src/componnents/job-edit/job-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    JobListingComponent,
    CreateJobComponent,
    JobEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
