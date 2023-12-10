import {
  from,
  delay,
  map,
  of,
  mergeMap,
  concatMap,
  catchError,
  throwError,
} from 'rxjs'

const delayPerElement = (delayMs) =>
  concatMap((x) => of(x).pipe(delay(delayMs)))

const O1$ = from(Promise.resolve('ready')).pipe(delayPerElement(1000))
const O2$ = from([1, 2, 3]).pipe(
  delayPerElement(300),
  map((v) => {
    if (v === 3) {
      throw new Error('eeeee')
    }

    return v
  })
)

O1$.pipe(
  //map((v) => v + 'sss'),
  mergeMap((v) => O2$),
  catchError((err) => {
    console.log('error caught HEHE PARENT')
    return of('no errors parent')
  })
).subscribe(
  (v) => {
    console.log('value', v)
  },
  (err) => {
    console.log('error', err)
  },
  () => {
    console.log('completed mutual')
  }
)
