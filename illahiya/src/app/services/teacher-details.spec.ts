import { TestBed } from '@angular/core/testing';

import { TeacherDetails } from './teacher-details';

describe('TeacherDetails', () => {
  let service: TeacherDetails;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherDetails);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
