import {InjectionToken} from '@angular/core';
import {animationFrameScheduler, interval, Observable} from 'rxjs';
import {share} from 'rxjs/operators';

export const TICK = new InjectionToken<Observable<number>>('Ticks', {
    factory: () => interval(250, animationFrameScheduler).pipe(share()),
});
