import {
  concatAll,
  concatMap,
  map,
  zip,
  zipAll,
  delay,
  catchError,
  of,
  from,
  combineLatestWith,
  withLatestFrom,
  tap,
} from 'rxjs'
import { delayEach } from './delayEach.js'
import { logger } from './logger.js'

const o1$ = of(1, 2, 3).pipe(delayEach(2000))
const o2$ = of('a', 'b', 'c').pipe(delayEach(1000))
const o3$ = of('-', '--', '---').pipe(delayEach(3000))

const o4$ = o1$.pipe(withLatestFrom(o2$))

o4$.subscribe({
  next: (v) => {
    logger.info(v)
  },
  err: (err) => {
    logger.error(v)
  },
  complete: () => {
    logger.warn('complete')
  },
})
