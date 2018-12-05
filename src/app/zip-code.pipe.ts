import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zipCode'
})
export class ZipCodePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return `${value.substr(0, 3)}-${value.substring(3)}`;
  }

}
