import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private filteredDataArrSubject = new Subject<any>();
  currentData = this.filteredDataArrSubject.asObservable();
  constructor() {}

  FilterFunc(filtrArr){
    this.filteredDataArrSubject.next(filtrArr);
  }
}
