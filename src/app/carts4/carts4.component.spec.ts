import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carts4Component } from './carts4.component';

describe('Carts4Component', () => {
  let component: Carts4Component;
  let fixture: ComponentFixture<Carts4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Carts4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Carts4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
