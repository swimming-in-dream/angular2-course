import {ProductModel} from '../model/ProductModel';
import {ProductCategory} from '../model/ProductCategory';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  products: Array<ProductModel>;

  constructor() {
    this.products = [this.createComputer(), this.createSmartphone(), this.createCamera()];
  }

  public getAllProducts(): Array<ProductModel> {
    return this.products;
  }

  private createComputer(): ProductModel {
    const computer = new ProductModel();
    computer.category = ProductCategory.COMPUTER;
    computer.name = 'ASUS Laptop';
    computer.description = 'L210 Ultra Thin Laptop, 11.6” HD Display, Intel Celeron N4020 Processor, 4GB RAM, 64GB Storage';
    computer.price = 1000;
    return computer;
  }

  private createSmartphone(): ProductModel {
    const smartphone = new ProductModel();
    smartphone.category = ProductCategory.SMARTPHONE;
    smartphone.name = 'Samsung Galaxy S21';
    smartphone.description = 'Factory Unlocked Android Cell Phone | US Version 5G Smartphone | Pro-Grade Camera, 8K Video';
    smartphone.price = 999;
    smartphone.isAvailable = true;
    return smartphone;
  }

  private createCamera(): ProductModel {
    const camera = new ProductModel();
    camera.category = ProductCategory.CAMERA;
    camera.name = 'Fotga DP500III 15mm';
    camera.description = 'Filmmaking System Quick Release Set Up Camera Cage Bracket Follow Focus Matte Box DSLR Rig';
    camera.price = 350;
    camera.isAvailable = true;
    return camera;
  }
}
