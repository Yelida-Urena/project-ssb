import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenBoyaComponent } from './imagen-boya.component';

describe('ImagenBoyaComponent', () => {
  let component: ImagenBoyaComponent;
  let fixture: ComponentFixture<ImagenBoyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenBoyaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagenBoyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
