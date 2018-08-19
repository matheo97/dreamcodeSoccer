import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ReversePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'reversePipe',
})
export class ReversePipe implements PipeTransform {

   transform(value) {
       if (!value) return;
       return value.reverse();
     }
}
