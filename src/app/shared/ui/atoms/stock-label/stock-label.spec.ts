import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StockLabel } from './stock-label';

describe('StockLabel', () => {
  let component: StockLabel;
  let fixture: ComponentFixture<StockLabel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockLabel],
    }).compileComponents();

    fixture = TestBed.createComponent(StockLabel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
