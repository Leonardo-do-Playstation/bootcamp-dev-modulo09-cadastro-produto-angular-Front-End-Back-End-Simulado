import { Injectable } from '@angular/core';
import { products } from '../interfaces/products';
import { Observable } from 'rxjs'; //Será copiado do category.services
import { HttpClient } from '@angular/common/http'; //Será copiado também do category.services

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private http: HttpClient) { } // Será injetado dentro do construtor  
 
  getProducts() : Observable<products[]>{
    return this.http.get<products[]>("http://localhost:3000/products"); //A lógica será praticamente a mesma do service category, porém o que irá diferenciar é o retorno do array de produtos e não de categorias, e também o endereço do end-point
  }
  save(product:products){
   return this.http.post<products>("http://localhost:3000/products", product); //Nessa função salvamos o produto dgitado atraves do end-point http, que tem um metodo chamado post que enviará o produto no endereço do back end
  
     //Antiga lógica usada para salvar os produtos do array, porém agora ele estará no back-end 
    //  product.id = this.products.length + 1; //Importado do componente filho, para imprimir na tela (products é um array, por isso precisa do length)
  //   this.products.push(product);
     
  }
}
//Sempre que alterar os métodos do front para o back-end, é preciso alterar os métodos do componente correspondente ao service (Ex: Componte products do serviço products)