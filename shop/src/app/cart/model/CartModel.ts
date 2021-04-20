import {CartEntryModel} from './CartEntryModel';

export class CartModel {

  cartEntries: Array<CartEntryModel>;
  total: number;

  constructor() {
    this.cartEntries = [];
    this.total = 0;
  }

  public isEmpty(): boolean {
    return this.cartEntries.length === 0;
  }

  getItemsCount(): number {
    let count = 0;
    for (const entry of this.cartEntries) {
      count += entry.quantity;
    }
    return count;
  }
}
