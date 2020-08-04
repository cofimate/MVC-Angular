import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { CategoryService } from "../category/category.service";
import { Category } from "../category/category";
import { ProductService } from "./product.service";
import { Product } from "./product";

@Component({
  templateUrl: "./product-detail.component.html"
})
export class ProductDetailComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location) { }

  product: Product;
  messages: string[] = [];
  categories: Category[] = [];

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        if (params['id'] != "-1") {
          this.productService.getProduct(params['id'])
            .subscribe(product => this.product = product,
            errors => this.handleErrors(errors));
        }
        else {
          this.product = new Product();
          this.product.price = 1;
          this.product.categoryId = 1;
          this.product.url = "http://www.fairwaytech.com";
        }
      }
    });

    this.getCategories();
  }

  goBack() {
    this.location.back();
  }

  updateProduct(product: Product) {
    this.productService.updateProduct(product)
      .subscribe(() => this.goBack(),
      errors => this.handleErrors(errors));
  }

  private addProduct(product: Product) {
    this.productService.addProduct(product)
      .subscribe(() => this.goBack(),
      errors => this.handleErrors(errors));
  }

  saveProduct() {
    if (this.product) {
      if (this.product.productId) {
        this.updateProduct(this.product);
      }
      else {
        this.addProduct(this.product);
      }
    }
  }

  private getCategories() {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories,
      errors => this.handleErrors(errors));
  }

  private handleErrors(errors: any) {
    this.messages = [];

    for (let msg of errors) {
      this.messages.push(msg);
    }
  }
}