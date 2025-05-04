import { Component } from '@angular/core';
import { category } from '../../interfaces/category';
import { products } from '../../interfaces/products';
import { CategoryService } from '../../services/category.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  constructor(private categoryService : CategoryService, private ProductsService: ProductsService) {}// Nome escolhido do parametro seguido da classe com esse serviço que seram recebidos do service(Aqui se faz a injeção das dependencias)

  ngOnInit(): void {//Usado para carregar de fato as categorias no componente (Usar serviço)
    this.loadCategories();
    this.loadProducts();
  }
  // this.products = this.ProductsService.getProducts(); Antigo metodo de chamada do service sem chamada http
 
  loadProducts(){ //Novo
    this.ProductsService.getProducts().subscribe({
      next: data => {this.products = data}
      });
    }
    // this.categories = this.categoryService.getCategories(); Antigo metodo de chamada do service de categories de chamada http

  loadCategories(){//Novo
    this.categoryService.getCategories().subscribe({
      next: data => {this.categories = data} // dentro do subscribe recebemos os dados da chamada quando finalizada pelo next (os dados são um array de categoria nesse caso chamado por data), e depois fazemos uma atribuição do data que será igual ao array de categorias 
    }); //Serviço que faz as chamadas de categorias, e é um observable agora, seguido do subscribe.
  }



  categories : category [] = []; //Array vazio de categorias
  product : products = {} as products;
  products : products [] = [];

   saveProduct(){
    this.ProductsService.save(this.product).subscribe({ //Nessa linha o subscribe é avisado pelo observable para executar o metodo saveProduct
     next: data => {
        this.products.push(data);  // Serve para receber e guardar os dados armazenados em memoria, sem fazer outra chamada, mas que podem estar desatualizadas pois nao estao sendo feito por chamadas
        this.product = {} as products; // Um novo objeto produto vazio é criado 
      }
    });
  }
}
