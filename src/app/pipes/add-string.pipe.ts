import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addString'
})
export class AddStringPipe implements PipeTransform {

  transform(value: string, before: string, after: string): string {
    const newStr = `${before} ${value} ${after}`;
    return newStr;
  }

}
