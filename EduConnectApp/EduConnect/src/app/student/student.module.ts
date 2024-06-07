import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollegesComponent } from './colleges/colleges.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [CollegesComponent],
  imports: [
    CommonModule, RouterLink
  ],
  exports:[CollegesComponent]
})
export class StudentModule { }
