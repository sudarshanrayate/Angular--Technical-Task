import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { jobs } from 'src/app/job-interface';
import { APIService } from 'src/services/api.service';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.scss']
})
export class CreateJobComponent {
  constructor(
    private fb: FormBuilder, 
    private APICall: APIService,
    private router: Router
    ) { }

  jobForm = this.fb.group({
    job_number: ['', Validators.required],
    job_title: ['', Validators.required],
    job_start_date: ['', Validators.required],
    job_close_date: ['', Validators.required],
    experience_required: ['', Validators.required],
    number_of_openings: [null , [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    job_notes: ['', Validators.required],
  })

  ngOnInit(): void { }

  save() {
    this.APICall.createJob(this.jobForm.value).subscribe((res: jobs[]) => {
      this.router.navigateByUrl('');
    }) 
  }
}
