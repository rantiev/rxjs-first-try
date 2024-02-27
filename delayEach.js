import { of, delay, pipe, concatMap } from 'rxjs'

export function delayEach(t = 1000) {
  return pipe(concatMap((v) => of(v).pipe(delay(t))))
}
