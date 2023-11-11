import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPow'
})
export class CustomPowPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(value)
    console.log(args)

    if(args.length == 0) 
      value = Math.pow(value, 2)

    else if(args.length == 1)
      value = Math.pow(value, args[0])

    else if(args.length >= 2)
    {
      value = Math.pow(value, args[0])
      value = value * ((args[1] / 100) + 1)

      if(args.length == 3)
        value = value + " " + args[2][0] + " " + args[2][1]
    }
 
    return value;
  }
}