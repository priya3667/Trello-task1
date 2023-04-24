import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComHeaderComponent } from './comp1.component';

describe('ComHeaderComponent', () => {
  let component: ComHeaderComponent;
  let fixture: ComponentFixture<ComHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
