import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssthreeComponent } from './cssthree.component';

describe('CssthreeComponent', () => {
  let component: CssthreeComponent;
  let fixture: ComponentFixture<CssthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
