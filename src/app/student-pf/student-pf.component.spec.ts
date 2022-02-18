import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPfComponent } from './student-pf.component';

describe('StudentPfComponent', () => {
  let component: StudentPfComponent;
  let fixture: ComponentFixture<StudentPfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentPfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
