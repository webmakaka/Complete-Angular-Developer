import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabComponent } from 'src/app/shared/tab/tab.component';
import { TabsContainerComponent } from 'src/app/shared/tabs-container/tabs-container.component';

@Component({
  template: `
    <app-tabs-container>
      <app-tab tabTitle="Tab 1">Tab 1</app-tab>
      <app-tab tabTitle="Tab 2">Tab 2</app-tab>
      <app-tab tabTitle="Tab 3">Tab 3</app-tab></app-tabs-container
    >
  `,
})
class TestHostComponent {}

describe('TabsContainerComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let component: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabsContainerComponent, TabComponent, TestHostComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
