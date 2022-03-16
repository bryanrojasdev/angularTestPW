import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,args: any): any {
    const resultList = []
    for(const item of value){
      if(item.name.toLowerCase().indexOf(args.toLowerCase())> -1){
        resultList.push(item);
      }
    }
    return resultList;
  }

}
