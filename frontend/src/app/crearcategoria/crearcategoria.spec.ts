import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Crearcategoria } from './crearcategoria';

describe('Crearcategoria', () => {
  let component: Crearcategoria;
  let fixture: ComponentFixture<Crearcategoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Crearcategoria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Crearcategoria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
