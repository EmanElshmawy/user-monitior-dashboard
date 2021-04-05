import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleAppsTableComponent } from './google-apps-table.component';

describe('GoogleAppsTableComponent', () => {
  let component: GoogleAppsTableComponent;
  let fixture: ComponentFixture<GoogleAppsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleAppsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleAppsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
