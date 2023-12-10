import { forkJoin } from 'rxjs'
import { throwError } from 'rxjs'
import {
  from,
  map,
  delay,
  concatMap,
  of,
  concatAll,
  catchError,
  zipAll,
  tap,
  take,
  interval,
  finalize,
} from 'rxjs'

const delayPerElement = (d) => concatMap((x) => of(x).pipe(delay(d)))

const urls = [1, 2, 3, 4, 5]

let zip = ''

const O$ = from(urls).pipe(
  // delayPerElement(1000),
  concatMap((x, i) => {
    return forkJoin([
      Promise.resolve(x),
      getRandomDelayedPromise(x, 1 - i),
      Promise.resolve(i),
    ])
  }),
  map(([url, res, i]) => {
    console.log(`Zipping file: ${url}`)
    zip += res

    return `${i + 1} loaded`
  })
)

O2$.subscribe(
  (x) => {
    console.log('All done')
    console.log(x)
  },
  (err) => console.error('Here is my error 2', err),
  () => {
    console.warn('All done completed')
  }
)

O$.subscribe(
  (x) => {
    console.log('progress')
    console.log(x)
  },
  (err) => console.error('Here is my error', err),
  () => {
    console.warn('completed')
  }
)

function getRandomDelayedPromise(x, d) {
  console.log(`Download file -> ${x}`)

  return new Promise((resolve) => {
    setTimeout(
      () => {
        const r = `File content ${x}`
        console.log(r)
        resolve(r)
      },
      Math.random() * d * 1000
    )
  })
}
