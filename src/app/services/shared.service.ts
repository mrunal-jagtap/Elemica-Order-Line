import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  isFormValid = new BehaviorSubject(false);
  constructor() { }

  setData(data:any,isValid:boolean) {
    data.isValid = isValid
    this.isFormValid.next(data);
  }
}
