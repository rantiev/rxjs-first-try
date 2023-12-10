import { throwError } from 'rxjs'
import { from, map, delay, concatMap, of, concatAll, catchError } from 'rxjs'

const delayPerElement = (d) => concatMap((x) => of(x).pipe(delay(d)))

const O$ = from([1, 2, 3, 4, 5]).pipe(
  // delayPerElement(1000),
  map((x) => {
    if (x !== 3) {
      return from(
        new Promise((resolve) => {
          setTimeout(
            () => {
              resolve(x)
            },
            Math.random() * 10 * 1000
          )
        })
      )
    } else {
      return from(
        new Promise((resolve, reject) => {
          setTimeout(
            () => {
              reject(x)
            },
            Math.random() * 10 * 1000
          )
        })
      ).pipe(catchError((x) => of(x)))
    }
  }),
  concatMap((x) => {
    return x.pipe(map((x) => x))
  }),
  catchError((x) => {
    return throwError(() => `${x} with adddition`)
  }),
  map((x) => x)
)

O$.subscribe(
  (x) => console.log(x),
  (err) => console.error('Here is my error', err),
  () => console.warn('completed')
)

const O2$ = from([21, 22, 23, 24, 25]).pipe(
  // delayPerElement(1000),
  map((x) => {
    if (x !== 3) {
      return from(
        new Promise((resolve) => {
          setTimeout(
            () => {
              resolve(x)
            },
            Math.random() * 10 * 1000
          )
        })
      )
    } else {
      return from(
        new Promise((resolve, reject) => {
          setTimeout(
            () => {
              reject(x)
            },
            Math.random() * 10 * 1000
          )
        })
      ).pipe(catchError((x) => of(x)))
    }
  }),
  concatAll(),
  catchError((x) => {
    return throwError(() => `${x} with adddition`)
  }),
  map((x) => x)
)

O2$.subscribe(
  (x) => console.log(x),
  (err) => console.error('Here is my error', err),
  () => console.warn('completed')
)
