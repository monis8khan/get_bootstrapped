import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesigComponent } from './desig.component';

describe('DesigComponent', () => {
  let component: DesigComponent;
  let fixture: ComponentFixture<DesigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
