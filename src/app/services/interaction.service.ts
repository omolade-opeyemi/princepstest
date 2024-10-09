import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private _sideNav = new Subject<string>();
  setNavStatus = this._sideNav.asObservable();

  getNavStatus(message:string){
    this._sideNav.next(message);
  }

 
  private screenWidth = new Subject<boolean>();
  sharedscreenWidth = this.screenWidth.asObservable();

  getscreenWidth(message: boolean){
    this.screenWidth.next(message);
  }

  private screenSize = new Subject<number>();
  screenSize$ = this.screenSize.asObservable();

  getscreenSize(message: number){
    this.screenSize.next(message);
  }


}
