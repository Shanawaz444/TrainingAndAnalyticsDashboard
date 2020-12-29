import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginpageMaincardRightBtnComponent } from './loginpage-maincard-right-btn.component';

describe('LoginpageMaincardRightBtnComponent', () => {
  let component: LoginpageMaincardRightBtnComponent;
  let fixture: ComponentFixture<LoginpageMaincardRightBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginpageMaincardRightBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginpageMaincardRightBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
