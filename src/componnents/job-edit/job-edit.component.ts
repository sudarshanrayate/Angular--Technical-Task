import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { jobs } from 'src/app/job-interface';
import { APIService } from 'src/services/api.service';

@Component({
  selector: 'app-job-edit',
  templateUrl: './job-edit.component.html',
  styleUrls: ['./job-edit.component.scss']
})
export class JobEditComponent {
  constructor(
    private fb: FormBuilder, 
    private APICall: APIService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  editJobForm = this.fb.group({
    job_number: ['', Validators.required],
    job_title: ['', Validators.required],
    job_start_date: ['', Validators.required],
    job_close_date: ['', Validators.required],
    experience_required: ['', Validators.required],
    number_of_openings: [null , [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    job_notes: ['', Validators.required],
  })

  id = this.route.snapshot.params['id'];

  ngOnInit(): void {
    this.APICall.getJobById(this.id).subscribe((res) => {
      this.editJobForm.patchValue(res);
    })
  }

  save(): void {
    this.APICall.updateJob(this.id, this.editJobForm.value).subscribe((res: jobs[]) => {
      this.router.navigateByUrl('');
    })
  }
}
