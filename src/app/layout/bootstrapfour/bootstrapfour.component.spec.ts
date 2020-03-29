import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapfourComponent } from './bootstrapfour.component';

describe('BootstrapfourComponent', () => {
  let component: BootstrapfourComponent;
  let fixture: ComponentFixture<BootstrapfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
