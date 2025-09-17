import { Component, signal } from '@angular/core';
import { provideRouter, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Dashboard } from './dashboard/dashboard';
import { TeacherDetails } from './teacher-details/teacher-details';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  providers: [
    provideRouter([
      { path: '', component: Dashboard },
      { path: 'teacherDetails', component: TeacherDetails },
    ]),
  ],
})
export class App {
  protected readonly title = signal('Illahiya');
}
