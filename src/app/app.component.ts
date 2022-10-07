import { Component } from '@angular/core';
import { Product } from "./product.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  product: Product[];
  constructor(){
    this.product = [

      new Product(
        "NICEHAT",
        "A Nice Black Hat",
        "/resources/imagens/products/black-hat.jpg",
        ["Men", "Accesories", "Hats"],
        29.99
      ),
      new Product(
        "HEATOJACKET",
        "Blue Jacket",
        "/resources/imagens/products/black-shoes.jpg",
        ["Women", "Apparel", "Jackets & Vests"],
        29.99
      ),
      new Product(
        "MYSHOES",
        "Black Running Shoes",
        "/resources/imagens/products/black-hat.jpg",
        ["Men", "Shoes", "Running Shoes"],
        29.99
      ) 
    ];
  }
}