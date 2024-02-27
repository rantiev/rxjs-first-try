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
  tap,
} from 'rxjs'
import { delayEach } from './delayEach.js'
import { logger } from './logger.js'

const o1$ = of(1, 2, 3).pipe(delayEach(300))

const o4$ = o1$.pipe(
  map((v) => of(v)),
  combineLatestAll()
)

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
