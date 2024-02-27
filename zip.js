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
} from 'rxjs'
import { logger } from './logger.js'
import { resolveAfter } from './utils.js'

// const o1$ = from([1, 2, 3])
// const o2$ = of('a', 'b', 'c')
//
// const o3$ = all(o1$, o2$).pipe(
//   map((v) => {
//     logger.error(v)
//     return v
//   })
// )
//
// o3$.subscribe({
//   next: (v) => {
//     logger.info(v)
//   },
//   err: (err) => {
//     logger.info(v)
//   },
//   complete: () => {
//     logger.warn('complete')
//   },
// })

const o1$ = from([
  resolveAfter(1, 1000),
  resolveAfter(2, 2000),
  resolveAfter(3, 3000),
])

o1$.pipe(zipAll()).subscribe({
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
