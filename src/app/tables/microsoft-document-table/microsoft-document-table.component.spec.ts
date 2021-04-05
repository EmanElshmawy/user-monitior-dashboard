import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrosoftDocumentTableComponent } from './microsoft-document-table.component';

describe('MicrosoftDocumentTableComponent', () => {
  let component: MicrosoftDocumentTableComponent;
  let fixture: ComponentFixture<MicrosoftDocumentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicrosoftDocumentTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrosoftDocumentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
