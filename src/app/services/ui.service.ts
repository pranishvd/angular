import { Injectable } from '@angular/core';
import {Observable,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showToggle:boolean = false;
  private subject:any = new Subject();

constructor() { }


toggleAddShow():void {
  this.showToggle = !this.showToggle

  this.subject.next(this.showToggle)
}

onToggle():Observable<any> {
  return this.subject.asObservable();
}

}
