import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KundereferanserComponent } from './kundereferanser.component';

describe('KundereferanserComponent', () => {
  let component: KundereferanserComponent;
  let fixture: ComponentFixture<KundereferanserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KundereferanserComponent]
    });
    fixture = TestBed.createComponent(KundereferanserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
