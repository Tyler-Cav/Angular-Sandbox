import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularResources } from './angular-resources';

describe('AngularResources', () => {
  let component: AngularResources;
  let fixture: ComponentFixture<AngularResources>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularResources]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularResources);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
