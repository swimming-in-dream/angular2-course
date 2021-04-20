import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FirstComponent} from './based/FirstComponent';
import {ProductComponent} from './products/components/ProductComponent/ProductComponent';
import {ProductListComponent} from './products/components/ProductListComponent/ProductListComponent';
import {ProductService} from './products/services/ProductService';
import {CartService} from './cart/services/CartService';
import {CartComponent} from './cart/components/CartComponent/CartComponent';
import {CartEntryComponent} from './cart/components/CartEntryComponent/CartEntryComponent';

@NgModule({
  declarations: [
    AppComponent, FirstComponent, ProductComponent, ProductListComponent, CartComponent, CartEntryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductService, CartService],
  bootstrap: [AppComponent, FirstComponent, ProductComponent, ProductListComponent, CartComponent]
})
export class AppModule {
}
