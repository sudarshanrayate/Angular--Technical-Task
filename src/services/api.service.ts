import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { jobs } from 'src/app/job-interface';


@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private _http:HttpClient) { }

  getJobs() {
    return this._http.get<jobs[]>("http://localhost:3000/jobs");
  }

  createJob (data: any) {
    return this._http.post<jobs[]>("http://localhost:3000/jobs", data);
  }


  getJobById(id: number){
    return this._http.get<any>("http://localhost:3000/jobs/"+id);
  }

  updateJob(id: number, data: any){
    return this._http.put<any>("http://localhost:3000/jobs/"+id, data);
  }

  deleteJob(id: number) {
    return this._http.delete<any>("http://localhost:3000/jobs/"+id);
  }
}
