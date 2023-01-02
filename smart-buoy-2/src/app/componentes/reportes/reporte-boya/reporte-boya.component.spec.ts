import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteBoyaComponent } from './reporte-boya.component';

describe('ReporteBoyaComponent', () => {
  let component: ReporteBoyaComponent;
  let fixture: ComponentFixture<ReporteBoyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteBoyaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteBoyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
