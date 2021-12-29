import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChartFComponent } from './my-chart-f.component';

describe('MyChartFComponent', () => {
  let component: MyChartFComponent;
  let fixture: ComponentFixture<MyChartFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyChartFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyChartFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
