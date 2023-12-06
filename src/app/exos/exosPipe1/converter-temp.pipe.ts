import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converterTemp'
})
export class ConverterTempPipe implements PipeTransform {

  transform(value: number, ...args: string[]): string {
    if(value == undefined || args[1] == undefined)
      return ""

    console.log(args)
    if(args[0] == args[1])
      return value.toString() + " " + args[0].toUpperCase() + "°";
    
    if(args[1] == "f")
    {
      value = ((value - 32) * (5/9))
      return value.toString() + " " + args[0].toUpperCase() + "°";
    }

    if(args[1] == "c")
    {
      value = ((value * (9/5)) + 32)
      return value.toString() + " " + args[0].toUpperCase() + "°";
    }

    return ""

  }
}
