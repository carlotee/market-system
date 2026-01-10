import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listarusuadmin } from './listarusuadmin';

describe('Listarusuadmin', () => {
  let component: Listarusuadmin;
  let fixture: ComponentFixture<Listarusuadmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listarusuadmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listarusuadmin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
