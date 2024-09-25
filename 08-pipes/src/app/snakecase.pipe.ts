import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'snakecase'
})
export class SnakecasePipe implements PipeTransform {

  transform(value: string): string { 
    return value 
      .replace(/\s+/g, '_')        // Replace spaces with underscores 
      .toLowerCase();              // Convert to lowercase 
  }

}
