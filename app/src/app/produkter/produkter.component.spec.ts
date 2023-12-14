import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdukterComponent } from './produkter.component';

describe('ProdukterComponent', () => {
  let component: ProdukterComponent;
  let fixture: ComponentFixture<ProdukterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdukterComponent]
    });
    fixture = TestBed.createComponent(ProdukterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
