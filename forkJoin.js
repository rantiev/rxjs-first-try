import {
  delay,
  concatAll,
  concatMap,
  mergeAll,
  map,
  zip,
  zipAll,
  catchError,
  throwError,
  of,
  from,
  combineLatestAll,
  takeWhile,
  interval,
  forkJoin,
} from 'rxjs'
import { logger } from './logger.js'

const o1$ = forkJoin([
  from(Promise.resolve(1)).pipe(delay(1000)),
  from(Promise.resolve(2)).pipe(delay(2000)),
])

o1$.subscribe({
  next: (v) => {
    logger.info(v)
  },
  err: (err) => {
    logger.error(v)
  },
  complete: () => {
    logger.warn('complete 1')
  },
})

// Can't make forkJOIN to have promised error and call forkjoin subscription
// error callback

// const o2$ = forkJoin([
//   from(Promise.resolve(1)).pipe(delay(3000)),
//   from(
//     new Promise((resolve, reject) => {
//       setTimeout(
//         () => {
//           reject(10)
//         },
//         Math.random() * 1 * 1000
//       )
//     })
//   ).pipe(
//     catchError((err) =>
//       throwError(() => {
//         console.log('hjere')
//         return new Error('asdf')
//       })
//     )
//   ),
// ]).pipe(
//   catchError((err) =>
//     throwError(() => {
//       console.log('hjere')
//       return new Error('asdf')
//     })
//   )
// )
//
// o2$.subscribe({
//   next: (v) => {
//     logger.info(v, 2)
//   },
//   err: (err) => {
//     logger.error('my error', 2)
//   },
//   complete: () => {
//     logger.warn('complete 2')
//   },
// })
