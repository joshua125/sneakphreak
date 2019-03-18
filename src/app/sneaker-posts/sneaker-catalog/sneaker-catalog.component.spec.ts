import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerCatalogComponent } from './sneaker-catalog.component';

describe('SneakerCatalogComponent', () => {
  let component: SneakerCatalogComponent;
  let fixture: ComponentFixture<SneakerCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SneakerCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
