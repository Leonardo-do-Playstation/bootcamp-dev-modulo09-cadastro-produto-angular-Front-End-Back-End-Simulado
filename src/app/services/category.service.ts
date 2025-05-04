import { Injectable } from '@angular/core';
import { category } from '../interfaces/category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({ //Decorator obrigatorio para injetar o service
  providedIn: 'root'
})
export class CategoryService  {


    constructor(private http: HttpClient){} //Esse constructor não deve conter metodos, pois apenas serve para incializar o serviço

  getCategories() : Observable<category[]> { //Aqui o metodo get retorna um tipo observable, que sera usado para chamadas assincronas(Observable é um array de categoria)
    return this.http.get<category[]>("http://localhost:3000/categories") //Nessa função retornamos as categorias atraves do end-point http, que tem um metodo chamado get que retornara o array categoria no endereço do back end
  }
  //O metodo get é executado de forma assincrona, ou seja, a chamada desse end-point não impede o resto da aplicação de rodar esperando

}
