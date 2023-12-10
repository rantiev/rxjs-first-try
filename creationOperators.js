import { of, from, map, merge, concat, concatMap, concatAll, delay, mergeMap } from 'rxjs';

concat(
  of(100).pipe(delay(Math.random() * 4000)),
  of(200).pipe(delay(Math.random() * 4000))
)
  .pipe(map(sendTo), concatAll(), concatMap(save))
  .subscribe(console.log)


function sendTo(phone) {
  console.log(`sends to ${phone}`)
  return of(phone, phone).pipe(delay(Math.random() * 4000))
}

function save(text) {
  console.log(`saves ${text}`)
  return of(`${text} saved`).pipe(delay(Math.random() * 4000))
}
