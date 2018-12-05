import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "tospace"
})
export class ToSpace implements PipeTransform {
  transform(value: string, args: string): any {
    return value.replace(args, " ");
  }
}
