import {Component, Input} from '@angular/core';
import {CartEntryModel} from '../../model/CartEntryModel';

@Component({
  selector: 'app-cart-entry-component',
  templateUrl: './cart-entry-template.html',
})
export class CartEntryComponent {

  @Input() entry?: CartEntryModel;

}
