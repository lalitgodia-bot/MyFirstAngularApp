import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cakes } from './cakes';

describe('Cakes', () => {
  let component: Cakes;
  let fixture: ComponentFixture<Cakes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cakes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cakes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
