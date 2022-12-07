import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumheaderComponent } from './mediumheader.component';

describe('MediumheaderComponent', () => {
  let component: MediumheaderComponent;
  let fixture: ComponentFixture<MediumheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediumheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediumheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
