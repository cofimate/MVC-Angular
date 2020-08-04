import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NotLowerCaseValidatorDirective } from "./shared/validator-notlowercase.directive";
import { MinValidatorDirective } from "./shared/validator-min.directive";
import { MaxValidatorDirective } from "./shared/validator-max.directive";

import { ProductListComponent } from "./product/product-list.component";
import { ProductDetailComponent } from "./product/product-detail.component";
import { ProductService } from "./product/product.service";
import { CategoryService } from "./category/category.service";

@NgModule({
  imports: [BrowserModule, AppRoutingModule, HttpModule, FormsModule],
  declarations: [AppComponent, ProductListComponent, ProductDetailComponent, NotLowerCaseValidatorDirective, MinValidatorDirective, MaxValidatorDirective],
  bootstrap: [AppComponent],
  providers: [ProductService, CategoryService]
})
export class AppModule { }
