export function resolveAfter(v, t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(v)
    }, t)
  })
}

export function rejectAfter(v, t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(v)
    }, t)
  })
}
