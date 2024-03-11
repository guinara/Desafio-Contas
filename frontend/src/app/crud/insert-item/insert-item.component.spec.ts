import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertItemComponent } from './insert-item.component';

describe('InsertItemComponent', () => {
  let component: InsertItemComponent;
  let fixture: ComponentFixture<InsertItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
