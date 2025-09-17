import { Component, OnInit, signal } from '@angular/core';
import { TeacherDetailsService, Teacher } from '../services/teacher-details';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.html',
  styleUrls: ['./teacher-details.css'],
})
export class TeacherDetails implements OnInit {
  teachers: Teacher[] = [];
  currentIndex = 0;
  
  teacherForm = new FormGroup({
    id: new FormControl(''),
    teacher_id: new FormControl(''),
    teacher_name: new FormControl(''),
    date_of_joining: new FormControl(''),
  });

  constructor(private teacherService: TeacherDetailsService) {}
  
  ngOnInit() {
    this.loadTeachers();
  }

  loadTeachers() {
    this.teacherService.getTeachers().subscribe((data) => {
      this.teachers = data;
      if (this.teachers.length) this.setForm(this.teachers[0]);
    });
  }

  setForm(teacher: Teacher) {
    this.teacherForm.setValue({
      id: teacher.id || '',
      teacher_id: teacher.teacher_id || '',
      teacher_name: teacher.teacher_name || '',
      date_of_joining: teacher.date_of_joining || '',
    });
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.setForm(this.teachers[this.currentIndex]);
    }
  }

  next() {
    if (this.currentIndex < this.teachers.length - 1) {
      this.currentIndex++;
      this.setForm(this.teachers[this.currentIndex]);
    }
  }

  add() {
    const teacher: Teacher = this.teacherForm.value;
    this.teacherService.addTeacher(teacher).subscribe(() => this.loadTeachers());
  }

  edit() {
    const teacher: Teacher = this.teacherForm.value;
    if (teacher.id) {
      this.teacherService.updateTeacher(teacher.id, teacher).subscribe(() => this.loadTeachers());
    }
  }

  delete() {
    const teacher: Teacher = this.teacherForm.value;
    if (teacher.id) {
      this.teacherService.deleteTeacher(teacher.id).subscribe(() => this.loadTeachers());
    }
  }

  find() {
    const id = this.teacherForm.value.id;
    if (id) {
      this.teacherService.getTeacher(id).subscribe((teacher) => this.setForm(teacher));
    }
  }
}
