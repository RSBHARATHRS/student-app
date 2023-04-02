import { Component, OnInit } from '@angular/core';
import { StudentData } from 'src/app/core/models/student-data.model';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  studentList: StudentData[] | null = null;

  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
    this.studentList = this.apiService.getStudentList();
  }

}
