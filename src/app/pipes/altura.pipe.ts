import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'altura'
})
export class AlturaPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if(value>100){
      return 'High'
    }else if(value>100 && value<200){
      return 'Normal'
    }else if(value<100){
      return 'Low'
    }
    return value ;
  }

}
