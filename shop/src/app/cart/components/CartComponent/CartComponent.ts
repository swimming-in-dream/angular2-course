import {Component} from '@angular/core';
import {CartModel} from '../../model/CartModel';
import {CartService} from '../../services/CartService';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-template.html',
})
export class CartComponent {

  cart: CartModel;
  cartService: CartService;

  constructor(cartService: CartService) {
    this.cartService = cartService;
    this.cart = cartService.getCart();
  }
}
