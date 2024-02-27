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
  combineLatest,
  tap,
} from 'rxjs'
import { delayEach } from './delayEach.js'
import { logger } from './logger.js'

const o1$ = of(1, 2, 3).pipe(delayEach(2000))
const o2$ = of('a', 'b', 'c').pipe(delayEach())
const o3$ = of('-', '--', '---').pipe(delayEach(3000))

const o4$ = combineLatest([o1$, o2$, o3$])

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
