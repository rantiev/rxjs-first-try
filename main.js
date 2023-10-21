const res01 = document.querySelector('.res01')
const res02 = document.querySelector('.res02')
const res03 = document.querySelector('.res03')
const res04 = document.querySelector('.res04')
const res05 = document.querySelector('.res05')
const res06 = document.querySelector('.res06')

const res001 = document.querySelector('.res001')
const res002 = document.querySelector('.res002')
const res003 = document.querySelector('.res003')
const res004 = document.querySelector('.res004')
const res005 = document.querySelector('.res005')

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
const interval1 = rxjs.interval(500).pipe(rxjs.take(10))
const interval2 = rxjs.interval(500)

interval1.pipe(rxjs.map((e, i) => e + 'ex1' )).subscribe({
  next: v => {
    res01.innerHTML = `${res01.innerHTML}<span>${v}</span>`
  },
  error: e => console.error,
  complete: () => {
    res01.innerHTML = `${res01.innerHTML} - completed`
  }
})

interval1.pipe(rxjs.switchMap((e, i) => rxjs.of(e + 'ex2', e + '*ex2', e + '**ex2')
  .pipe(rxjs.delay((10 - i) * 1000)))).subscribe({
    next: v => {
      res02.innerHTML = `${res02.innerHTML}<span>${v}</span>`
    },
    error: e => console.error,
    complete: () => {
      res02.innerHTML = `${res02.innerHTML} - completed`
    }
})

interval1.pipe(rxjs.concatMap((e, i) => rxjs.of(e + 'ex3', e + '*ex3', e + '**ex3')
  .pipe(rxjs.delay((10 - i) * 1000)))).subscribe({
  next: v => {
    res03.innerHTML = `${res03.innerHTML}<span>${v}</span>`
  },
  error: e => console.error,
  complete: () => {
    res03.innerHTML = `${res03.innerHTML} - completed`
  }
})

interval1.pipe(rxjs.mergeMap((e, i) => rxjs.of(e + 'ex4', e + '*ex4', e + '**ex4')
  .pipe(rxjs.delay((10 - i) * 1000)))).subscribe({
  next: v => {
    res04.innerHTML = `${res04.innerHTML}<span>${v}</span>`
  },
  error: e => console.error,
  complete: () => {
    res04.innerHTML = `${res04.innerHTML} - completed`
  }
})

interval1.pipe(rxjs.exhaustMap((e, i) => rxjs.of(e + 'ex5', e + '*ex5', e + '**ex5')
  .pipe(rxjs.delay((10 - i) * 1000)))).subscribe({
  next: v => {
    res05.innerHTML = `${res05.innerHTML}<span>${v}</span>`
  },
  error: e => console.error,
  complete: () => {
    res05.innerHTML = `${res05.innerHTML} - completed`
  }
})

interval1.pipe(rxjs.map((e, i) => rxjs.of(e + 'ex1').pipe(rxjs.delay((10-i)*1000))), rxjs.switchAll()).subscribe({
  next: v => {
    res001.innerHTML = `${res001.innerHTML}<span>${v}</span>`
  },
  error: e => console.error,
  complete: () => {
    res001.innerHTML = `${res001.innerHTML} - completed`
  }
})

interval1.pipe(rxjs.map((e, i) => rxjs.of(e + 'ex2').pipe(rxjs.delay((10-i)*1000))), rxjs.mergeAll()).subscribe({
  next: v => {
    res002.innerHTML = `${res002.innerHTML}<span>${v}</span>`
  },
  error: e => console.error,
  complete: () => {
    res002.innerHTML = `${res002.innerHTML} - completed`
  }
})

interval1.pipe(rxjs.map((e, i) => rxjs.of(e + 'ex3').pipe(rxjs.delay((10-i)*1000))), rxjs.concatAll()).subscribe({
  next: v => {
    res003.innerHTML = `${res003.innerHTML}<span>${v}</span>`
  },
  error: e => console.error,
  complete: () => {
    res003.innerHTML = `${res003.innerHTML} - completed`
  }
})

interval1.pipe(rxjs.map((e, i) => rxjs.of(e + 'ex4').pipe(rxjs.delay((10-i)*1000))), rxjs.exhaustAll()).subscribe({
  next: v => {
    res004.innerHTML = `${res004.innerHTML}<span>${v}</span>`
  },
  error: e => console.error,
  complete: () => {
    res004.innerHTML = `${res004.innerHTML} - completed`
  }
})

interval1.pipe(rxjs.map((e, i) => rxjs.of(e + 'ex5').pipe(rxjs.delay((10-i)*1000))), rxjs.combineLatestAll()).subscribe({
  next: v => {
    res005.innerHTML = `${res005.innerHTML}<span>${v}</span>`
  },
  error: e => console.error,
  complete: () => {
    res005.innerHTML = `${res005.innerHTML} - completed`
  }
})


observable1.pipe(rxjs.filter(e => e.clientX <= 150 && e.clientY <= 150 )).subscribe(v => {
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

observable1.pipe(rxjs.distinct(e => e.clientX)).subscribe(v => {
  res16.innerHTML = `${res16.innerHTML}<span>${v.clientX}</span>`
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