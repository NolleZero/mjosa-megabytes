import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontaktskjemaComponent } from './kontaktskjema.component';

describe('KontaktskjemaComponent', () => {
  let component: KontaktskjemaComponent;
  let fixture: ComponentFixture<KontaktskjemaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KontaktskjemaComponent]
    });
    fixture = TestBed.createComponent(KontaktskjemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
