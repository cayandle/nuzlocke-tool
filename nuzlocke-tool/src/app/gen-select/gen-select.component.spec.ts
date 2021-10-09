import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenSelectComponent } from './gen-select.component';

describe('GenSelectComponent', () => {
  let component: GenSelectComponent;
  let fixture: ComponentFixture<GenSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
