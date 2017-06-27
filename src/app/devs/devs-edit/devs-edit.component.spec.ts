import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevsEditComponent } from './devs-edit.component';

describe('DevsEditComponent', () => {
  let component: DevsEditComponent;
  let fixture: ComponentFixture<DevsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
