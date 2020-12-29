import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterpageMaincardHeadingComponent } from './registerpage-maincard-heading.component';

describe('RegisterpageMaincardHeadingComponent', () => {
  let component: RegisterpageMaincardHeadingComponent;
  let fixture: ComponentFixture<RegisterpageMaincardHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterpageMaincardHeadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterpageMaincardHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
