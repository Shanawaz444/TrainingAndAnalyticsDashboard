import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginpageMaincardLeftComponent } from './loginpage-maincard-left.component';

describe('LoginpageMaincardLeftComponent', () => {
  let component: LoginpageMaincardLeftComponent;
  let fixture: ComponentFixture<LoginpageMaincardLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginpageMaincardLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginpageMaincardLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
