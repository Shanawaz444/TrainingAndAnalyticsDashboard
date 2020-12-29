import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginpageMaincardComponent } from './loginpage-maincard.component';

describe('LoginpageMaincardComponent', () => {
  let component: LoginpageMaincardComponent;
  let fixture: ComponentFixture<LoginpageMaincardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginpageMaincardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginpageMaincardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
