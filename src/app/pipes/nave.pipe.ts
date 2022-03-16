import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nave'
})
export class NavePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if(value>1000){
      return 'Large'
    }else if(value>100 && value<1000){
      return 'Normal'
    }else if(value<100){
      return 'Small'
    }
    return value ;
  }

}
