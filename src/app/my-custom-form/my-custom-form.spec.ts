import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCustomForm } from './my-custom-form';

describe('MyCustomForm', () => {
  let component: MyCustomForm;
  let fixture: ComponentFixture<MyCustomForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCustomForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCustomForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
