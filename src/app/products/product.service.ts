import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


import { IProduct } from './product';

@Injectable()

export class ProductService {
    //Using local file for this project instead of making true http get
    private _productURL = './api/products/products.json'

    constructor(private _http: HttpClient) {

    }

    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productURL);
    }
}