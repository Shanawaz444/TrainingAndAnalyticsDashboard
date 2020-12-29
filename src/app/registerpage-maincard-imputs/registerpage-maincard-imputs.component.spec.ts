import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterpageMaincardImputsComponent } from './registerpage-maincard-imputs.component';

describe('RegisterpageMaincardImputsComponent', () => {
  let component: RegisterpageMaincardImputsComponent;
  let fixture: ComponentFixture<RegisterpageMaincardImputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterpageMaincardImputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterpageMaincardImputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
