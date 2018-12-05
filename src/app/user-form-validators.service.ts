import { Injectable } from '@angular/core';
import {AbstractControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserFormValidatorsService {

  constructor() { }

  prefix(prefix: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value.toString().match(`^${prefix}`) ?
        null :
        {'Prefix': `${control.value} not match ${prefix}-`};
    }
  }
  equalValue(control1: string, control2: string): ValidatorFn {
    return (control: FormGroup): ValidationErrors | null => {
      const formControl1: AbstractControl = control.controls[control1];
      const formcontrol2: AbstractControl = control.controls[control2];

      return formControl1.value !== formcontrol2.value ? {'EqualValue': `${control1} not equal to ${control2}`} : null;
    }
  }

}
