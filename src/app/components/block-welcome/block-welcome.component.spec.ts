import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockWelcomeComponent } from './block-welcome.component';

describe('BlockWelcomeComponent', () => {
  let component: BlockWelcomeComponent;
  let fixture: ComponentFixture<BlockWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockWelcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
