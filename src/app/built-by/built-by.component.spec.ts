import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltByComponent } from './built-by.component';

describe('BuiltByComponent', () => {
  let component: BuiltByComponent;
  let fixture: ComponentFixture<BuiltByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuiltByComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuiltByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
