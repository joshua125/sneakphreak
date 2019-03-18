import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerPostCreateComponent } from './sneaker-post-create.component';

describe('SneakerPostCreateComponent', () => {
  let component: SneakerPostCreateComponent;
  let fixture: ComponentFixture<SneakerPostCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SneakerPostCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerPostCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
