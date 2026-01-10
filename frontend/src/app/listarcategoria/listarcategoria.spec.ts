import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listarcategoria } from './listarcategoria';

describe('Listarcategoria', () => {
  let component: Listarcategoria;
  let fixture: ComponentFixture<Listarcategoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listarcategoria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listarcategoria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
