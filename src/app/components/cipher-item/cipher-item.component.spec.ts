import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CipherItemComponent } from './cipher-item.component';

describe('CipherItemComponent', () => {
  let component: CipherItemComponent;
  let fixture: ComponentFixture<CipherItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CipherItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CipherItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
