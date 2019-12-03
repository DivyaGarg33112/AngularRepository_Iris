import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString:any,propertyToBeFiltered:string): any {
    if(value.length==0||filterString==''){
      return value;
    }
    else {
      let items=[];
      for(let item of value){
        if(item[propertyToBeFiltered]===filterString){
          items.push(item);
        }
      }
    return items;
    }
  }

}
