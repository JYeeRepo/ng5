import { Injectable } from '@angular/core'; 

import { BehaviorSubject } from 'rxjs/BehaviorSubject'; // allow sharing data between components

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private goals = new BehaviorSubject<any>(['The initial goal', 'ANother silly life goal']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal);
  } 
}
