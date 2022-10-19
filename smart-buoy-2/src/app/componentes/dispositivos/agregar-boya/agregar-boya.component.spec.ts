import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarBoyaComponent } from './agregar-boya.component';

describe('AgregarBoyaComponent', () => {
  let component: AgregarBoyaComponent;
  let fixture: ComponentFixture<AgregarBoyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarBoyaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarBoyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
