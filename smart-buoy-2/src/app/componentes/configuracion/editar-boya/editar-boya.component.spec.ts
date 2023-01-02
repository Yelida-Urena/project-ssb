import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarBoyaComponent } from './editar-boya.component';

describe('EditarBoyaComponent', () => {
  let component: EditarBoyaComponent;
  let fixture: ComponentFixture<EditarBoyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarBoyaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarBoyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
