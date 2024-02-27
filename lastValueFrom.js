import { interval, take, lastValueFrom } from 'rxjs'
import { logger } from './logger.js'

const source$ = interval(1000).pipe(take(3))

logger.warn(await lastValueFrom(source$))
