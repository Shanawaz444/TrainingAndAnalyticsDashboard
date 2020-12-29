import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterpageMaincardRegesterbtnComponent } from './registerpage-maincard-regesterbtn.component';

describe('RegisterpageMaincardRegesterbtnComponent', () => {
  let component: RegisterpageMaincardRegesterbtnComponent;
  let fixture: ComponentFixture<RegisterpageMaincardRegesterbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterpageMaincardRegesterbtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterpageMaincardRegesterbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
