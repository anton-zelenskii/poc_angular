import { Observable, Observer } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AtlasStateService {
  observer: Observer<string>;
  status = 'Initial';

  getStatusObservable(): Observable<string> {
    return new Observable((observer) => {
      this.observer = observer;
      this.observer.next(this.status);
    });
  }

  setStatus(status: string): void {
    this.status = status;
    this.observer.next(this.status);
    setTimeout(() => {
      this.status = 'Saved';
      this.observer.next(this.status);
    }, 3000);
  }
}
