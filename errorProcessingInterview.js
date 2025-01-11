import { of, map, concatMap, throwError } from 'rxjs'

of(1, 2, 3).pipe(
  map((v) => {
    if (v < 2) {
      return v;
    }

    throw new Error('my error');
  }),
).subscribe({
  next: console.log,
  error: (err) => {
    console.error('errored with', err.message)
  },
  complete: () => {
    console.info('completed')
  },
})

of(1, 2, 3).pipe(
  concatMap((v) => {
    if (v < 2) {
      return of(v);
    }

    return throwError(() => new Error('my error'));
  }),
).subscribe({
  next: console.log,
  error: (err) => {
    console.error('errored with', err.message)
  },
  complete: () => {
    console.info('completed')
  },
})
