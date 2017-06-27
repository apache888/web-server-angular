import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevsDetailComponent } from './devs-detail.component';

describe('DevsDetailComponent', () => {
  let component: DevsDetailComponent;
  let fixture: ComponentFixture<DevsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
