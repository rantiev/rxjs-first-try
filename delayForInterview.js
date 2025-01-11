import { of, delay, concatMap } from 'rxjs'

of(1, 2, 3).pipe(
  delay(1000),
).subscribe(console.log)


of(1, 2, 3).pipe(
  concatMap((v) => of(v).pipe(delay(1000))),
).subscribe(console.log)
