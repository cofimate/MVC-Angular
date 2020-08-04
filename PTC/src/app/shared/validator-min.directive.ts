import { Directive, Input, forwardRef, OnInit } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

export const min = (min: number): ValidatorFn => {
  return (c: AbstractControl): { [key: string]: boolean } => {
    let ret: any = null;

    if (min !== undefined && min !== null) {
      let value: number = +c.value;
      if (value < +min) {
        ret = { min: true };
      }
    }

    return ret;
  };
};

@Directive({
  selector: '[min]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => MinValidatorDirective),
    multi: true
  }]
})
export class MinValidatorDirective implements Validator, OnInit {
  @Input() min: number;

  private validator: ValidatorFn;

  ngOnInit() {
    this.validator = min(this.min);
  }

  validate(c: AbstractControl): { [key: string]: any } {
    return this.validator(c);
  }
}