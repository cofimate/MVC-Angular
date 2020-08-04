"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var validator_notlowercase_directive_1 = require("./shared/validator-notlowercase.directive");
var validator_min_directive_1 = require("./shared/validator-min.directive");
var validator_max_directive_1 = require("./shared/validator-max.directive");
var product_list_component_1 = require("./product/product-list.component");
var product_detail_component_1 = require("./product/product-detail.component");
var product_service_1 = require("./product/product.service");
var category_service_1 = require("./category/category.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, http_1.HttpModule, forms_1.FormsModule],
            declarations: [app_component_1.AppComponent, product_list_component_1.ProductListComponent, product_detail_component_1.ProductDetailComponent, validator_notlowercase_directive_1.NotLowerCaseValidatorDirective, validator_min_directive_1.MinValidatorDirective, validator_max_directive_1.MaxValidatorDirective],
            bootstrap: [app_component_1.AppComponent],
            providers: [product_service_1.ProductService, category_service_1.CategoryService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map