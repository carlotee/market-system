import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalleproducto } from './detalleproducto';

describe('Detalleproducto', () => {
  let component: Detalleproducto;
  let fixture: ComponentFixture<Detalleproducto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detalleproducto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detalleproducto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
