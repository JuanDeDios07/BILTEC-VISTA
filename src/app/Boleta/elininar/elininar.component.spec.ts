import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElininarComponent } from './elininar.component';

describe('ElininarComponent', () => {
  let component: ElininarComponent;
  let fixture: ComponentFixture<ElininarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElininarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElininarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
