import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { qualifications } from 'src/app/core/data/qualification.data';
import { ApiService } from 'src/app/core/services/api.service';
import { primaryLang } from 'src/app/mock/data/data';
import { countryList, studyAbroad } from 'src/app/mock/data/mock-index';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})

export class StudentFormComponent implements OnInit {

  countryList = countryList;
  studyAbroad = studyAbroad;
  primaryLang = primaryLang;
  qualifications = qualifications;

  studentForm: FormGroup<any> = new FormGroup<any>({
    firstName: new FormControl('', { nonNullable: true }),
    lastName: new FormControl('', { nonNullable: true }),
    email: new FormControl('', { nonNullable: true }),
    age: new FormControl('', { nonNullable: true }),
    dob: new FormControl('', { nonNullable: true }),
    qualification: new FormControl('', { nonNullable: true }),
    gender: new FormControl('', { nonNullable: true }),
    siteId: new FormControl('', { nonNullable: true }),
    primaryLang: new FormControl([], { nonNullable: true }),
    country: new FormControl('', { nonNullable: true }),
    likeToStudyIn: new FormControl('', { nonNullable: true }),
    subLang: new FormControl('', { nonNullable: true }),
    range: new FormControl('0', { nonNullable: true }),
    acceptTerms: new FormControl(false, { nonNullable: true }),
  });

  constructor(private apiService: ApiService) {
    // this.voiceRecognitionServiceService.init();
  }

  ngOnInit(): void {

  }

  reset() {
    this.studentForm.reset();
  }

  addStudent() {
    console.log(this.studentForm.value, "add student");
    this.apiService.addStudentWithExistingData(this.studentForm.value);
  }

}
