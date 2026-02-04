import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'semester',
})
export class SemesterPipe implements PipeTransform {
  transform({ lowest, highest }: { lowest: number; highest: number }): string {
    return `${transformSemester(lowest)} - ${transformSemester(highest)}`;
  }
}
function transformSemester(semester: number) {
  switch (semester) {
    case 1:
      return '1er';
    case 2:
      return '2do';
    case 3:
      return '3er';
    case 4:
      return '4to';
    case 5:
      return '5to';
    case 6:
      return '6to';
    case 7:
      return '7mo';
    case 8:
      return '8vo';
    case 9:
      return '9no';
    default:
      throw new Error('Semester exceeded.');
  }
}
