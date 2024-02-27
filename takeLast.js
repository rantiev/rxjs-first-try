import { combineLatestWith } from 'rxjs'
import {
  concatAll,
  concatMap,
  mergeAll,
  map,
  zip,
  zipAll,
  delay,
  catchError,
  of,
  from,
  combineLatestAll,
  take,
  takeWhile,
  takeUntil,
  takeLast,
  interval,
} from 'rxjs'
import { delayEach } from './delayEach.js'
import { logger } from './logger.js'

const o1$ = interval(100)

const o3$ = o1$.pipe(take(10), takeLast(2))

o3$.subscribe({
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
