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
  interval,
} from 'rxjs'
import { delayEach } from './delayEach.js'
import { logger } from './logger.js'

const o1$ = interval(100)

const o2$ = o1$.pipe(takeWhile((v) => v <= 10))

o2$.subscribe({
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
