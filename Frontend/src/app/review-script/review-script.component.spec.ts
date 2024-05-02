import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewScriptComponent } from './review-script.component';

describe('ReviewScriptComponent', () => {
  let component: ReviewScriptComponent;
  let fixture: ComponentFixture<ReviewScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReviewScriptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReviewScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
