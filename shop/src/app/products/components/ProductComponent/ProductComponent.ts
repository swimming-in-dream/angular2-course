import {Component, Input} from '@angular/core';
import {ProductModel} from '../../model/ProductModel';
import {CartService} from '../../../cart/services/CartService';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component-template.html',
})
export class ProductComponent {

  @Input() product?: ProductModel;
  cartService: CartService;

  constructor(cartService: CartService) {
    this.cartService = cartService;
  }

  addToCart(product: ProductModel): void {
    console.log('Item was added to cart');
    this.cartService.addToCart(product);
  }
}
