import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterpageMaincardLeftcoreComponent } from './registerpage-maincard-leftcore.component';

describe('RegisterpageMaincardLeftcoreComponent', () => {
  let component: RegisterpageMaincardLeftcoreComponent;
  let fixture: ComponentFixture<RegisterpageMaincardLeftcoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterpageMaincardLeftcoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterpageMaincardLeftcoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
