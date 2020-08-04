"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDetailComponent = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var category_service_1 = require("../category/category.service");
var product_service_1 = require("./product.service");
var product_1 = require("./product");
var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(categoryService, productService, route, location) {
        this.categoryService = categoryService;
        this.productService = productService;
        this.route = route;
        this.location = location;
        this.messages = [];
        this.categories = [];
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            if (params['id'] !== undefined) {
                if (params['id'] != "-1") {
                    _this.productService.getProduct(params['id'])
                        .subscribe(function (product) { return _this.product = product; }, function (errors) { return _this.handleErrors(errors); });
                }
                else {
                    _this.product = new product_1.Product();
                    _this.product.price = 1;
                    _this.product.categoryId = 1;
                    _this.product.url = "http://www.fairwaytech.com";
                }
            }
        });
        this.getCategories();
    };
    ProductDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProductDetailComponent.prototype.updateProduct = function (product) {
        var _this = this;
        this.productService.updateProduct(product)
            .subscribe(function () { return _this.goBack(); }, function (errors) { return _this.handleErrors(errors); });
    };
    ProductDetailComponent.prototype.addProduct = function (product) {
        var _this = this;
        this.productService.addProduct(product)
            .subscribe(function () { return _this.goBack(); }, function (errors) { return _this.handleErrors(errors); });
    };
    ProductDetailComponent.prototype.saveProduct = function () {
        if (this.product) {
            if (this.product.productId) {
                this.updateProduct(this.product);
            }
            else {
                this.addProduct(this.product);
            }
        }
    };
    ProductDetailComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories()
            .subscribe(function (categories) { return _this.categories = categories; }, function (errors) { return _this.handleErrors(errors); });
    };
    ProductDetailComponent.prototype.handleErrors = function (errors) {
        this.messages = [];
        for (var _i = 0, errors_1 = errors; _i < errors_1.length; _i++) {
            var msg = errors_1[_i];
            this.messages.push(msg);
        }
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            templateUrl: "./product-detail.component.html"
        }),
        __metadata("design:paramtypes", [category_service_1.CategoryService,
            product_service_1.ProductService,
            router_1.ActivatedRoute,
            common_1.Location])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map