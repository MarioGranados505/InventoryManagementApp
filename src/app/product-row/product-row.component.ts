import { Component, Input, HostBinding, Host } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html'
})

export class ProductRowComponent{

  @Input()
  product!: Product;
  @HostBinding('attr.class') cssClass = 'item';
}
