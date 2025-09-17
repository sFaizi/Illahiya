import { Routes } from '@angular/router';
import { TeacherDetails } from './teacher-details/teacher-details';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
    { path: 'teacherDetails', component: TeacherDetails },
    {path: '', component: Dashboard }
];
