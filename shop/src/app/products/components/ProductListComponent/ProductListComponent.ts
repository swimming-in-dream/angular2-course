import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from '../../model/ProductModel';
import {ProductService} from '../../services/ProductService';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-component-list-template.html',
})
export class ProductListComponent {

  productService: ProductService;
  products: Array<ProductModel>;

  constructor(productService: ProductService) {
    this.productService = productService;
    this.products = this.productService.getAllProducts();
  }

}
