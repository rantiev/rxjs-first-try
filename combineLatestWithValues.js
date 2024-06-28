import {
  filter,
  forkJoin,
  concat,
  concatAll,
  concatMap,
  map,
  zip,
  race,
  zipAll,
  delay,
  catchError,
  of,
  from,
  combineLatest,
  tap,
  takeUntil,
  timer,
  throwError,
  timeout,
  retry,
} from 'rxjs'
import { delayEach } from './delayEach.js'
import { logger } from './logger.js'

const o1$ = of(null, 2, 3, 4, null, 0, false, '').pipe(delayEach(100))
const o2$ = of(null, undefined, 'c', 'd', false, false, 0, false, false).pipe(
  delayEach(200)
)
const o3$ = of(
  undefined,
  null,
  '---',
  null,
  '-----',
  null,
  null,
  null,
  null,
  null,
  '-------'
).pipe(delayEach(300))

export function combineLatestWithValues(
  observables,
  maxWaitingTime = 1000,
  maxRetries = 0
) {
  return combineLatest(
    observables.map((o) => o.pipe(filter((v) => !(v == null))))
  ).pipe(
    timeout({
      each: maxWaitingTime,
      with: () => throwError(() => new Error('Component data resolve timeout')),
    }),
    retry(maxRetries)
  )
}

combineLatestWithValues([o1$, o2$, o3$], 900).subscribe({
  next: (v) => {
    logger.info(v)
  },
  error: (err) => {
    logger.error(err.message)
  },
  complete: () => {
    logger.warn('completed combine')
  },
})

// const o4$ = combineLatest([o1$, o2$, o3$])
//
// o4$.subscribe({
//   next: (v) => {
//     logger.info(v)
//   },
//   err: (err) => {
//     logger.error(v)
//   },
//   complete: () => {
//     logger.warn('completed combine')
//   },
// })
//
// const o5$ = forkJoin([o1$, o2$, o3$])
//
// o5$.subscribe({
//   next: (v) => {
//     logger.info(v)
//   },
//   err: (err) => {
//     logger.error(v)
//   },
//   complete: () => {
//     logger.warn('completed join')
//   },
// })

// const o6$ = race(o1$, o2$, o3$)
//
// o6$.subscribe({
//   next: (v) => {
//     logger.info(v)
//   },
//   err: (err) => {
//     logger.error(v)
//   },
//   complete: () => {
//     logger.warn('completed concat')
//   },
// })
