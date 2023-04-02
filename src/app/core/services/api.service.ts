import { Injectable } from '@angular/core';
import { StudentData } from '../models/student-data.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  studentDB = 'studentList';

  constructor() { }

  getStudentList(): StudentData[] | null {
    if (localStorage.getItem(this.studentDB)) {
      return JSON.parse(localStorage.getItem(this.studentDB)!);
    } else {
      return null;
    }
  }

  addStudentWithExistingData(studentData: StudentData) {
    if (localStorage.getItem(this.studentDB)) {
      let existingStudentData: StudentData[] = JSON.parse(localStorage.getItem(this.studentDB)!);
      existingStudentData.push(studentData);
      localStorage.setItem(this.studentDB, JSON.stringify(existingStudentData));
    } else {
      localStorage.setItem(this.studentDB, JSON.stringify([studentData]));
    }
  }

  storeStudentList() {

  }
}
