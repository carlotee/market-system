import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listarproveedores } from './listarproveedores';

describe('Listarproveedores', () => {
  let component: Listarproveedores;
  let fixture: ComponentFixture<Listarproveedores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listarproveedores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listarproveedores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
