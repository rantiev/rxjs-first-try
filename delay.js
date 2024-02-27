import { of, map, delay } from 'rxjs'
import { delayEach } from './delayEach.js'
import { logger } from './logger.js'

const $ = of(1, 2, 3, 4, 5, 6).pipe(
  delay(1000),
  map((v) => {
    console.log(v)
    return v
  })
)

$.subscribe({
  next: (v) => {
    logger.info(v)
  },
  complete: () => {
    logger.warn('complete')
  },
})

const $1 = of(1, 2, 3, 4, 5, 6).pipe(
  delayEach(100),
  map((v) => {
    console.log(v)
    return v
  })
)

$1.subscribe({
  next: (v) => {
    logger.info(v)
  },
  complete: () => {
    logger.warn('complete')
  },
})
