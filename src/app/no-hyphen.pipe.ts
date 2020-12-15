import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noHyphen'
})
export class NoHyphenPipe implements PipeTransform {

  transform(value: string): string {
    console.log(value);
    return value.replace('-', ' ');
  }

}
