import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { StudentModule } from './student/student.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , RouterLink , SharedModule, StudentModule ],
  templateUrl: './app.component.html',
  providers: [],
  styleUrl: './app.component.css'
})
export class AppComponent {
}
