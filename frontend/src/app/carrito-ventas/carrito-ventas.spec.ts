import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoVentas } from './carrito-ventas';

describe('CarritoVentas', () => {
  let component: CarritoVentas;
  let fixture: ComponentFixture<CarritoVentas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritoVentas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoVentas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
