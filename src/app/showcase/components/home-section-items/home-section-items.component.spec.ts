import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectionItemsComponent } from './home-section-items.component';

describe('HomeSectionItemsComponent', () => {
  let component: HomeSectionItemsComponent;
  let fixture: ComponentFixture<HomeSectionItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeSectionItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeSectionItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
