import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterpageMaincardLeftComponent } from './registerpage-maincard-left.component';

describe('RegisterpageMaincardLeftComponent', () => {
  let component: RegisterpageMaincardLeftComponent;
  let fixture: ComponentFixture<RegisterpageMaincardLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterpageMaincardLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterpageMaincardLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
