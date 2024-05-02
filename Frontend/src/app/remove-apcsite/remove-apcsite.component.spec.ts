import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveAPCsiteComponent } from './remove-apcsite.component';

describe('RemoveAPCsiteComponent', () => {
  let component: RemoveAPCsiteComponent;
  let fixture: ComponentFixture<RemoveAPCsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RemoveAPCsiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemoveAPCsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
