import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginpageMaincardRightHeadComponent } from './loginpage-maincard-right-head.component';

describe('LoginpageMaincardRightHeadComponent', () => {
  let component: LoginpageMaincardRightHeadComponent;
  let fixture: ComponentFixture<LoginpageMaincardRightHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginpageMaincardRightHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginpageMaincardRightHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
