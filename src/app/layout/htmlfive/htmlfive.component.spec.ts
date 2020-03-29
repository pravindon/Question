import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlfiveComponent } from './htmlfive.component';

describe('HtmlfiveComponent', () => {
  let component: HtmlfiveComponent;
  let fixture: ComponentFixture<HtmlfiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlfiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
