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
  takeWhile,
  takeUntil,
  interval,
} from 'rxjs'
import { delayEach } from './delayEach.js'
import { logger } from './logger.js'

const o1$ = interval(100)
const o2$ = of(1).pipe(delayEach(400))

const o3$ = o1$.pipe(takeUntil(o2$))

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
