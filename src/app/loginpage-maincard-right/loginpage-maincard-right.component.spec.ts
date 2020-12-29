import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginpageMaincardRightComponent } from './loginpage-maincard-right.component';

describe('LoginpageMaincardRightComponent', () => {
  let component: LoginpageMaincardRightComponent;
  let fixture: ComponentFixture<LoginpageMaincardRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginpageMaincardRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginpageMaincardRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
