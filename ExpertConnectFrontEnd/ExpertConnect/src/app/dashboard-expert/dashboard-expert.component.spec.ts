import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardExpertComponent } from './dashboard-expert.component';

describe('DashboardExpertComponent', () => {
  let component: DashboardExpertComponent;
  let fixture: ComponentFixture<DashboardExpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardExpertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
