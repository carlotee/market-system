import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eliminarcategoria } from './eliminarcategoria';

describe('Eliminarcategoria', () => {
  let component: Eliminarcategoria;
  let fixture: ComponentFixture<Eliminarcategoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eliminarcategoria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eliminarcategoria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
