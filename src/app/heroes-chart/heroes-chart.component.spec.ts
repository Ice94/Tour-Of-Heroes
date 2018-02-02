import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesChartComponent } from './heroes-chart.component';

describe('HeroesChartComponent', () => {
  let component: HeroesChartComponent;
  let fixture: ComponentFixture<HeroesChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
