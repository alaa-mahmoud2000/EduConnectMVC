import { Component } from '@angular/core';
import { EduApiService } from '../../core/services/edu-api.service';
import { ICollege } from '../../shared/interfaces';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-colleges',
  templateUrl: './colleges.component.html',
  styleUrl: './colleges.component.css'
})
export class CollegesComponent {
  colleges : ICollege[] = [];
  constructor(private apiService : EduApiService , private toastr : ToastrService){
  }
  ngOnInit(){
    this.apiService.getColleges().subscribe({
      next: (response) => {
        this.colleges = response;
      },
      error: (error) => {
        this.toastr.error('Error loading data , try again later.');
      }
    });
  }
}
