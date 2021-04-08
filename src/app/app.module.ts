import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccordeonComponent } from './accordeon/accordeon.component';
import { ProductComponent } from './product/product.component';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AccordeonComponent,
    ProductComponent,
    TooltipDirective,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
