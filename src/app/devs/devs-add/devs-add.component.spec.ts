import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevsAddComponent } from './devs-add.component';

describe('DevsAddComponent', () => {
  let component: DevsAddComponent;
  let fixture: ComponentFixture<DevsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
