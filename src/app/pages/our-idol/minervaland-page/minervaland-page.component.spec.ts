import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinervalandPageComponent } from './minervaland-page.component';

describe('MinervalandPageComponent', () => {
  let component: MinervalandPageComponent;
  let fixture: ComponentFixture<MinervalandPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinervalandPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinervalandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
