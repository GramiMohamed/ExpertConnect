import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeExpertComponent } from './become-expert.component';

describe('BecomeExpertComponent', () => {
  let component: BecomeExpertComponent;
  let fixture: ComponentFixture<BecomeExpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BecomeExpertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BecomeExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
