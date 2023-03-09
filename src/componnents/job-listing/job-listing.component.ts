import { Component } from '@angular/core';
import { jobs } from 'src/app/job-interface';
import { APIService } from 'src/services/api.service';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.scss']
})
export class JobListingComponent {

  jobList: jobs[] = [];

  constructor(private APICall: APIService) {}

  ngOnInit(): void {
    this.getJob();
  }

  deleteJob(id: number): void {
    this.APICall.deleteJob(id).subscribe((res) => {
      this.getJob();
    })
  }
  getJob(): void{
    this.APICall.getJobs().subscribe((res: jobs[]) => {
      this.jobList = res;
    });
  }
}
