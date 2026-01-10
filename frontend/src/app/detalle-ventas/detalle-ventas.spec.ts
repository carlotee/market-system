import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleVentas } from './detalle-ventas';

describe('DetalleVentas', () => {
  let component: DetalleVentas;
  let fixture: ComponentFixture<DetalleVentas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleVentas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleVentas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
