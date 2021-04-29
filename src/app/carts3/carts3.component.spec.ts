import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carts3Component } from './carts3.component';

describe('Carts3Component', () => {
  let component: Carts3Component;
  let fixture: ComponentFixture<Carts3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Carts3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Carts3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
