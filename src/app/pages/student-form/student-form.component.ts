import { Component } from '@angular/core';
import { countryList } from 'src/app/mock/data/mock-index';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})

export class StudentFormComponent {

  countryList = countryList;

  constructor() {
    // this.voiceRecognitionServiceService.init();
  }


  cancel() {

  }

  signUp() {

  }

}
