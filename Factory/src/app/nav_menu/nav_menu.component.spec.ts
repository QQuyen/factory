/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Nav_menuComponent } from './nav_menu.component';

describe('Nav_menuComponent', () => {
  let component: Nav_menuComponent;
  let fixture: ComponentFixture<Nav_menuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nav_menuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nav_menuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
