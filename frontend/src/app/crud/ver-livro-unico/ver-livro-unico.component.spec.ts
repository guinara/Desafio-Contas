import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerLivroUnicoComponent } from './ver-livro-unico.component';

describe('VerLivroUnicoComponent', () => {
  let component: VerLivroUnicoComponent;
  let fixture: ComponentFixture<VerLivroUnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerLivroUnicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerLivroUnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
