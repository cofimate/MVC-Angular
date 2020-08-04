import { Directive, Input, forwardRef, OnInit } from '@angular/core';
import { NG_VALIDATORS, Validator, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

export const max = (max: number): ValidatorFn => {
  return (c: AbstractControl): { [key: string]: boolean } => {
    let ret: any = null;

    if (max !== undefined && max !== null) {
      let value: number = +c.value;
      if (value > +max) {
        ret = { max: true };
      }
    }

    return ret;
  };
};

@Directive({
  selector: '[max]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => MaxValidatorDirective),
    multi: true
  }]
})
export class MaxValidatorDirective implements Validator, OnInit {
  @Input() max: number;

  private validator: ValidatorFn;

  ngOnInit() {
    this.validator = max(this.max);
  }

  validate(c: AbstractControl): { [key: string]: any } {
    return this.validator(c);
  }

  // The following code is if you want to change the 
  // value in the max="10000" attribute thru code
  // private onChange: () => void;
  //
  //ngOnChanges(changes: SimpleChanges) {
  //  for (let key in changes) {
  //    if (key === 'max') {
  //      this.validator = max(changes[key].currentValue);
  //      if (this.onChange) {
  //        this.onChange();
  //      }
  //    }
  //  }
  //}

  //registerOnValidatorChange(fn: () => void): void {
  //  this.onChange = fn;
  //}
}
