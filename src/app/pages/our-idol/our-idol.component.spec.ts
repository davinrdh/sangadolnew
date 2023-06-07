import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurIdolComponent } from './our-idol.component';

describe('OurIdolComponent', () => {
  let component: OurIdolComponent;
  let fixture: ComponentFixture<OurIdolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurIdolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurIdolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
