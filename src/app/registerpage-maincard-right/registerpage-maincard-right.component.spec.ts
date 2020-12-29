import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterpageMaincardRightComponent } from './registerpage-maincard-right.component';

describe('RegisterpageMaincardRightComponent', () => {
  let component: RegisterpageMaincardRightComponent;
  let fixture: ComponentFixture<RegisterpageMaincardRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterpageMaincardRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterpageMaincardRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
