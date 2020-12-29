import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginpageMaincardRightInputsComponent } from './loginpage-maincard-right-inputs.component';

describe('LoginpageMaincardRightInputsComponent', () => {
  let component: LoginpageMaincardRightInputsComponent;
  let fixture: ComponentFixture<LoginpageMaincardRightInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginpageMaincardRightInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginpageMaincardRightInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
