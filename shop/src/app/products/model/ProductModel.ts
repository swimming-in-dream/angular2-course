import {ComponentCategoryEnum} from '../../based/ComponentCategoryEnum';
import {ProductCategory} from './ProductCategory';

export class ProductModel {

  public name: string;

  public description: string;

  public price: number;

  public category: ProductCategory;

  public isAvailable: boolean;


}
