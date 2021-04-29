import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carts5Component } from './carts5.component';

describe('Carts5Component', () => {
  let component: Carts5Component;
  let fixture: ComponentFixture<Carts5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Carts5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Carts5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
