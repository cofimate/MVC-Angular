import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS, ValidatorFn } from '@angular/forms';

function notLowerCaseValidate(c: AbstractControl): ValidatorFn {
  let ret: any = null;

  const value = c.value;
  if (value) {
    if (value.toString().trim() ===
      value.toString().toLowerCase().trim()) {
      ret = { validateNotlowercase: { value } };
    }
  }

  return ret;
}

    @Directive({
      selector: '[validateNotlowercase]',
      providers: [{
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() =>
          NotLowerCaseValidatorDirective),
        multi: true
      }]
    })
    export class NotLowerCaseValidatorDirective implements Validator {
      private validator: ValidatorFn;

      constructor() {
        this.validator = notLowerCaseValidate;
      }

      validate(c: AbstractControl): { [key: string]: any } {
        return this.validator(c);
      }
    }
