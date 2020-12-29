import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterpageMaincardComponent } from './registerpage-maincard.component';

describe('RegisterpageMaincardComponent', () => {
  let component: RegisterpageMaincardComponent;
  let fixture: ComponentFixture<RegisterpageMaincardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterpageMaincardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterpageMaincardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
