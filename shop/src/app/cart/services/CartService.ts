import {CartModel} from '../model/CartModel';
import {ProductModel} from '../../products/model/ProductModel';
import {CartEntryModel} from '../model/CartEntryModel';

export class CartService {

  cart: CartModel;

  constructor() {
    this.cart = new CartModel();
  }

  public getCart(): CartModel {
    return this.cart;
  }

  public addToCart(product: ProductModel): boolean {
    for (const entry of this.cart.cartEntries) {
      if (entry.product.name === product.name) {
        entry.quantity += 1;
        this.calculateCart();
        return true;
      }
    }
    const newCartEntry = new CartEntryModel();
    newCartEntry.product = product;
    newCartEntry.quantity = 1;
    this.cart.cartEntries = this.cart.cartEntries.concat(newCartEntry);
    this.calculateCart();
    return true;
  }

  private calculateCart(): void {
    let total = 0;
    for (const entry of this.cart.cartEntries) {
      total += entry.product.price * entry.quantity;
    }
    this.cart.total = total;
  }

}

