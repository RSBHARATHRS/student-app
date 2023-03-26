import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStudentsDataComponent } from './all-students-data.component';

describe('AllStudentsDataComponent', () => {
  let component: AllStudentsDataComponent;
  let fixture: ComponentFixture<AllStudentsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllStudentsDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllStudentsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
