import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutVentas } from './checkout-ventas';

describe('CheckoutVentas', () => {
  let component: CheckoutVentas;
  let fixture: ComponentFixture<CheckoutVentas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutVentas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutVentas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
