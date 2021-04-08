import { Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AccordeonComponent } from './accordeon/accordeon.component';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { TooltipDirective } from './tooltip/tooltip.directive';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AccordeonComponent,
        ProductComponent,
        TooltipDirective,
      ],
      imports: [ReactiveFormsModule],
      providers: [Renderer2]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'decerto'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('decerto');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('decerto app is running!');
  });
});
