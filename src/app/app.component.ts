import { Component } from '@angular/core';
import { map, pipe } from 'rxjs';
import { APIService } from 'src/services/api.service';
import { jobs } from './job-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {}
  ngOnInit(): void {}
}
