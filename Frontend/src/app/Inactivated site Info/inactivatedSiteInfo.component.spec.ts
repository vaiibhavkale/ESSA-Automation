import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactivatedSiteInfoComponent } from './inactivatedSiteInfo.component';

describe('DashboardComponent', () => {
  let component: InactivatedSiteInfoComponent;
  let fixture: ComponentFixture<InactivatedSiteInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InactivatedSiteInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InactivatedSiteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
