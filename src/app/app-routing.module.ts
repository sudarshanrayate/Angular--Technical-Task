import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateJobComponent } from 'src/componnents/create-job/create-job.component';
import { JobEditComponent } from 'src/componnents/job-edit/job-edit.component';
import { JobListingComponent } from 'src/componnents/job-listing/job-listing.component';

const routes: Routes = [
  { path: '', component: JobListingComponent },
  { path: 'create-job', component: CreateJobComponent },
  { path: 'edit-job/:id', component: JobEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
