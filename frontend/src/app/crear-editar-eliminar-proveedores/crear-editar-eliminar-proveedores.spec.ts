import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEditarEliminarProveedores } from './crear-editar-eliminar-proveedores';

describe('CrearEditarEliminarProveedores', () => {
  let component: CrearEditarEliminarProveedores;
  let fixture: ComponentFixture<CrearEditarEliminarProveedores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearEditarEliminarProveedores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearEditarEliminarProveedores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
