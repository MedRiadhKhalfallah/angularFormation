import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'imagePipe'
})
export class ImagePipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case '':
        return 'profile.png';
      default:
        return value;
    }
  }

}
