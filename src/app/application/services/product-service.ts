import { inject, Service, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable, tap } from 'rxjs';
const URL= 'http://localhost:3000/products'
@Service()
export class ProductService {
    private readonly _http= inject(HttpClient);
    private readonly _products =signal<Product[]>([]);
    product=this._products.asReadonly();
    getproducts():Observable<Product[]>{
        return this._http.get<Product[]>(URL)
        .pipe(tap((allProducts: Product[])=>this._products.set(allProducts)));
       
    }
     addProduct(p: Omit<Product,'id'>):Observable<Product>{
return this._http.post<Product>(URL,p).pipe(
    tap(productAdded=>
        this._products.update(produits=>[...produits,productAdded]))
)
        }
}


