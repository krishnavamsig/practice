import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carts6Component } from './carts6.component';

describe('Carts6Component', () => {
  let component: Carts6Component;
  let fixture: ComponentFixture<Carts6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Carts6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Carts6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
