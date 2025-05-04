import { Component, Input, Output, EventEmitter } from '@angular/core';
import { category } from '../../interfaces/category';
import { products } from '../../interfaces/products';


@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  constructor(){}

   @Input()
   categories : category [] = [];
   
   @Input()
   product : products = {} as products; //product vai ser um objeto array do objeto products (Ou seja, ele vai assumir esse objeto)


  @Output()
   saveEmitter = new EventEmitter(); // Aqui é declarado um objeto saveEmitter que vai ser igual a um novo saveEmitter

   saveProduct(){
    this.saveEmitter.emit(); //Aqui vai ser declarado um metodo saveProduct, e ele retornara um objeto saveEmitter acima que fara a emissão e será enviado ao pai.
   }
  }
