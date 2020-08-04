import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ProductSearch } from "./productSearch";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Product } from "./product";

@Injectable()
export class ProductService {
  private url = "/api/productApi";

  constructor(private http: Http) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get(this.url)
      .map(this.extractData)
      .catch(this.handleErrors);
  }

  getProduct(id: number): Observable<Product> {
    let url = this.url + "/" + id;
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleErrors);
  }

  search(searchEntity: ProductSearch): Observable<Product[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.url + "/Search",
      searchEntity, options)
      .map(this.extractData)
      .catch(this.handleErrors);
  }

  addProduct(product: Product): Observable<Product> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.url, product, options)
      .map(this.extractData)
      .catch(this.handleErrors);
  }

  updateProduct(product: Product): Observable<Product> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(this.url + "/" + product.productId,
      product, options)
      .map(this.extractData)
      .catch(this.handleErrors);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete(this.url + "/" + id)
      .map(() => null)
      .catch(this.handleErrors);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleErrors(error: any): Observable<any> {
    let errors: string[] = [];

    switch (error.status) {
      case 400: // Bad Request or Model State Error
        let err = error.json();
        if (err.modelState) {
          let valErrors = error.json().modelState;
          for (var key in valErrors) {
            for (var i = 0; i < valErrors[key].length; i++) {
              errors.push(valErrors[key][i]);
            }
          }
        }
        else if (err.message) {
          errors.push(err.message);
        }
        else {
          errors.push("An Unknown error occurred.");
        }
        break;

      case 404: // Not Found
        errors.push("No Product Data Is Available.");
        break;

      case 500: // Internal Error
        errors.push(error.json().exceptionMessage);
        break;

      default:
        errors.push("Status: " + error.status
          + " - Error Message: "
          + error.statusText);
        break;
    };

    console.error('An error occurred', errors);

    return Observable.throw(errors);
  }
}
