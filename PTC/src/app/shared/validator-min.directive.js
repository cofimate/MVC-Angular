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
exports.MinValidatorDirective = exports.min = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
exports.min = function (min) {
    return function (c) {
        var ret = null;
        if (min !== undefined && min !== null) {
            var value = +c.value;
            if (value < +min) {
                ret = { min: true };
            }
        }
        return ret;
    };
};
var MinValidatorDirective = /** @class */ (function () {
    function MinValidatorDirective() {
    }
    MinValidatorDirective_1 = MinValidatorDirective;
    MinValidatorDirective.prototype.ngOnInit = function () {
        this.validator = exports.min(this.min);
    };
    MinValidatorDirective.prototype.validate = function (c) {
        return this.validator(c);
    };
    var MinValidatorDirective_1;
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], MinValidatorDirective.prototype, "min", void 0);
    MinValidatorDirective = MinValidatorDirective_1 = __decorate([
        core_1.Directive({
            selector: '[min]',
            providers: [{
                    provide: forms_1.NG_VALIDATORS,
                    useExisting: core_1.forwardRef(function () { return MinValidatorDirective_1; }),
                    multi: true
                }]
        })
    ], MinValidatorDirective);
    return MinValidatorDirective;
}());
exports.MinValidatorDirective = MinValidatorDirective;
//# sourceMappingURL=validator-min.directive.js.map