import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideAdmin } from './inside-admin';

describe('InsideAdmin', () => {
  let component: InsideAdmin;
  let fixture: ComponentFixture<InsideAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsideAdmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsideAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
