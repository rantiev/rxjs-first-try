import { forkJoin } from 'rxjs'
import { from, map, concatMap, concatAll, delay, of, tap, zip } from 'rxjs'
import { createOperatorSubscriber } from 'rxjs/internal/operators/OperatorSubscriber'
import { logger } from './logger.js'
import { resolveAfter } from './utils.js'

// const o$ = from([
//   resolveAfter(1, 3000),
//   resolveAfter(2, 2000),
//   resolveAfter(3, 1000),
// ]).pipe(
//   concatMap((v) => {
//     console.log(v)
//     return v
//   })
// )
//
// o$.subscribe({
//   next: (v) => {
//     console.log('concatMap next: ', v)
//   },
//   complete: () => {
//     console.log('concatMap complete')
//   },
// })

// const o2$ = from([
//   resolveAfter(1, 3000),
//   resolveAfter(2, 2000),
//   resolveAfter(3, 1000),
// ]).pipe(
//   map((v) => {
//     console.log(v)
//     return v
//   }),
//   concatAll()
// )
//
// o2$.subscribe({
//   next: (v) => {
//     console.log('concatAll next: ', v)
//   },
//   complete: () => {
//     console.log('concatAll complete')
//   },
// })

// const o3$ = from([
//   resolveAfter(1, 3000),
//   resolveAfter(2, 2000),
//   resolveAfter(3, 1000),
// ]).pipe(concatAll())
//
// o3$.subscribe({
//   next: (v) => {
//     console.log('concatAll next: ', v)
//   },
//   complete: () => {
//     console.log('concatAll complete')
//   },
// })

// const o4$ = from([1, 2, 3]).pipe(
//   map((v) => of(v).pipe(delay(v * 1000))),
//   concatAll()
// )
//
// o4$.subscribe({
//   next: (v) => {
//     console.log('map - delay - concatAll next: ', v)
//   },
//   complete: () => {
//     console.log('map - delay - concatAll complete')
//   },
// })

// const o5$ = from([1, 2, 3]).pipe(concatMap((v) => of(v).pipe(delay(v * 1000))))
//
// o5$.subscribe({
//   next: (v) => {
//     console.log('concatMap - delay next: ', v)
//   },
//   complete: () => {
//     console.log('concatMap - delay complete')
//   },
// })

// const o6$ = from([
//   of(1).pipe(delay(1000)),
//   of(2).pipe(delay(2000)),
//   of(3).pipe(delay(3000)),
// ]).pipe(concatAll())
//
// o6$.subscribe({
//   next: (v) => {
//     console.log('map - delay - concatAll next: ', v)
//   },
//   complete: () => {
//     console.log('map - delay - concatAll complete')
//   },
// })

// const o6$ = forkJoin([
//   of(1).pipe(delay(1000)),
//   of(2).pipe(delay(2000)),
//   of(3).pipe(delay(3000)),
// ]).pipe(concatAll())
//
// o6$.subscribe({
//   next: (v) => {
//     console.log('map - delay - concatAll next: ', v)
//   },
//   complete: () => {
//     console.log('map - delay - concatAll complete')
//   },
// })
