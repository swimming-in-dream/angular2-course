import {Component} from '@angular/core';
import {ComponentCategoryEnum} from './ComponentCategoryEnum';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component-template.html',
})
export class FirstComponent {

  name: string;

  description: string;

  price: number;

  category: ComponentCategoryEnum;

  isAvailable: boolean;


  constructor() {
    this.name = 'Firs component';
    this.description = 'First Angular App';
    this.category = ComponentCategoryEnum.FIRST_COMPONENT;
    this.isAvailable = true;
    this.price = 200;
  }


}
