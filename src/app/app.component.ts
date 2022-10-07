import { Component, EventEmitter } from '@angular/core';
import { Product } from "./product.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }

  constructor(){
    
    this.products = [

      new Product(
        "NICEHAT",
        "A Nice Black Hat",
        "/assets/imagens/products/black-hat.jpg",
        ["Men", "Accesories", "Hats"],
        29.99
      ),
      new Product(
        "NEATOJACKET",
        "Blue Jacket",
        "/assets/imagens/products/blue-jacket.jpg",
        ["Women", "Apparel", "Jackets & Vests"],
        238.99
      ),
      new Product(
        "MYSHOES",
        "Black Running Shoes",
        "/assets/imagens/products/black-shoes.jpg",
        ["Men", "Shoes", "Running Shoes"],
        29.99
      ) 
    ];
  }
}