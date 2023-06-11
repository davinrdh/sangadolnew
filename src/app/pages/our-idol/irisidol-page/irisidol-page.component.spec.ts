import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrisidolPageComponent } from './irisidol-page.component';

describe('IrisidolPageComponent', () => {
  let component: IrisidolPageComponent;
  let fixture: ComponentFixture<IrisidolPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrisidolPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IrisidolPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
