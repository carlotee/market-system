import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Perfilusuario } from './perfilusuario';

describe('Perfilusuario', () => {
  let component: Perfilusuario;
  let fixture: ComponentFixture<Perfilusuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Perfilusuario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Perfilusuario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
