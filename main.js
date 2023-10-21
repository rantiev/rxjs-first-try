const square1 = document.querySelector('.square1')
const square2 = document.querySelector('.square2')

const res11 = document.querySelector('.res11')
const res12 = document.querySelector('.res12')
const res13 = document.querySelector('.res13')
const res14 = document.querySelector('.res14')
const res15 = document.querySelector('.res15')
const res16 = document.querySelector('.res16')
const res17 = document.querySelector('.res17')
const res18 = document.querySelector('.res18')

const res31 = document.querySelector('.res31')
const res32 = document.querySelector('.res32')
const res33 = document.querySelector('.res33')
const res34 = document.querySelector('.res34')
const res35 = document.querySelector('.res35')
const res36 = document.querySelector('.res36')

const observable1 = rxjs.fromEvent(square1, 'click')
const observable2 = rxjs.fromEvent(square2, 'click')

observable1.pipe(rxjs.filter(e => e.clientX <= 70 && e.clientY <= 70 )).subscribe(v => {
  res11.innerHTML = `${res11.innerHTML}<span>{${v.clientX}, ${v.clientY}}</span>`
})

observable1.pipe(rxjs.delay(500)).subscribe(v => {
  res12.innerHTML = `${res12.innerHTML}<span>{${v.clientX}, ${v.clientY}}</span>`
})

observable1.pipe(rxjs.debounceTime(500)).subscribe(v => {
  res13.innerHTML = `${res13.innerHTML}<span>{${v.clientX}, ${v.clientY}}</span>`
})

observable1.pipe(rxjs.take(3)).subscribe(v => {
  res14.innerHTML = `${res14.innerHTML}<span>{${v.clientX}, ${v.clientY}}</span>`
})

observable1.pipe(rxjs.takeUntil(observable2)).subscribe(v => {
  res15.innerHTML = `${res15.innerHTML}<span>{${v.clientX}, ${v.clientY}}</span>`
})

observable1.pipe(rxjs.map(e => `{${e.clientX}, ${e.clientY}}`), rxjs.distinct(observable2)).subscribe(v => {
  res16.innerHTML = `${res16.innerHTML}<span>${v}</span>`
})

observable1.pipe(rxjs.distinctUntilChanged((e1, e2) => e1.clientX === e2.clientX)).subscribe(v => {
  res17.innerHTML = `${res17.innerHTML}<span>{${v.clientX}, ${v.clientY}}</span>`
})

observable1.pipe(rxjs.scan(count => count + 1, 0)).subscribe(v => {
  res18.innerHTML = `${res18.innerHTML}<span>${v}</span>`
})




const observable3 = rxjs.from([1, 2, 3])

observable3
  .subscribe(v => {
    res31.innerHTML = `${res31.innerHTML}<span>${v}</span>`
  });

setTimeout(() => {
  observable3
    .subscribe(v => {
      res32.innerHTML = `${res32.innerHTML}<span>${v}</span>`
    });
}, 3000);

const subscription33 = observable3.pipe(rxjs.delay(3000))
  .subscribe(v => {
    res33.innerHTML = `${res33.innerHTML}<span>${v}</span>`
  });

subscription33.unsubscribe();


const observable4 = rxjs.of([1, 'apple', {a: 1}])

observable4
  .subscribe(v => {
    res34.innerHTML = `${res34.innerHTML}<span>${v}</span>`
  });

const observable5 = rxjs.range(10, 10)

observable5
  .subscribe(v => {
    res35.innerHTML = `${res35.innerHTML}<span>${v}</span>`
  });

const observable6 = rxjs.zip(
  rxjs.of('a', 'b', 'c'),
  rxjs.of(1, 2, 3),
  rxjs.of(true, false, true),
);

observable6
  .subscribe(v => {
    res36.innerHTML = `${res36.innerHTML}<span>${v}</span>`
  });

const observable7 = rxjs.Observable.create(observer => {
  observer.next('foo')
  setTimeout(() => {
    observer.next('bar')
    observer.complete();
  }, 1000)
  setTimeout(() => observer.next('fooAgain'), 2000)
})

observable7
  .subscribe(v => console.log(v))

const observable8 = new rxjs.Subject

observable8
  .subscribe(v => console.log(v))

observable8.next('foo1')
observable8.next('bar1')
observable8.complete()
observable8.next('foo1Again');