import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { primaryLang } from 'src/app/mock/data/data';
import { countryList, studyAbroad } from 'src/app/mock/data/mock-index';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})

export class StudentFormComponent {

  countryList = countryList;
  studyAbroad = studyAbroad;
  primaryLang = primaryLang;

  studentForm: FormGroup<any> = new FormGroup<any>({
    firstName: new FormControl('', { nonNullable: true }),
    lastName: new FormControl('', { nonNullable: true }),
    email: new FormControl('', { nonNullable: true }),
    age: new FormControl('', { nonNullable: true }),
    dob: new FormControl('', { nonNullable: true }),
    siteId: new FormControl('', { nonNullable: true }),
    // lastName: new FormControl([], { nonNullable: true }),
    subLang: new FormControl('', { nonNullable: true }),
  });

  constructor() {
    // this.voiceRecognitionServiceService.init();
  }


  cancel() {

  }

  signUp() {

  }

}
