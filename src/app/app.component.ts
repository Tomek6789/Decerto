import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { GridArea } from './product/product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  subscriptions: Subscription = new Subscription()
  title = 'decerto';

  products = [
    { name: 'Prodcut 1', tooltioText: 'Najlepszy Produkt 1', gridArea: GridArea.A, form: new FormControl(), isActive: false },
    { name: 'Prodcut 2', tooltioText: 'Najlepszy Produkt 2', gridArea: GridArea.B, form: new FormControl(), isActive: false },
    { name: 'Prodcut 3', tooltioText: 'Najlepszy Produkt 3', gridArea: GridArea.C, form: new FormControl(), isActive: false },
    { name: 'Prodcut 4', tooltioText: 'Najlepszy Produkt 4', gridArea: GridArea.D, form: new FormControl(), isActive: false },
    { name: 'Prodcut 5', tooltioText: 'Najlepszy Produkt 5', gridArea: GridArea.E, form: new FormControl(), isActive: false },
    { name: 'Prodcut 6', tooltioText: 'Najlepszy Produkt 6', gridArea: GridArea.F, form: new FormControl(), isActive: false },
  ]

  ngOnInit() {
    this.products.forEach(product => this.subscriptions.add(product.form.valueChanges.subscribe(data => {
    
      this.products = this.products.map(item => ({
        ...item,
        isActive: data.name === item.name
      }));
    

      console.log(product)
    })))
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe()
  }
}
