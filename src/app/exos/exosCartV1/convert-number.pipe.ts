import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertNumber'
})
export class ConvertNumberPipe implements PipeTransform {


  transform(value: number): string {

    let chiffre = ["Un", "Deux", "Trois", "Quatre", "Cinq"]

    return chiffre[value-1];
  }

}
