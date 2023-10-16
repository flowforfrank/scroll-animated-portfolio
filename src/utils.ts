export const classNames = (arr: Array<string | null | boolean | undefined>): string | undefined =>
  arr?.filter(Boolean).join(' ')

export const scrollTo = (element: string, index?: number) => index
  ? document
    .querySelectorAll(element)?.[index]
    ?.scrollIntoView({ behavior: 'smooth' })
  : document
    .querySelector(element)
    ?.scrollIntoView({ behavior: 'smooth' })

export const clamp = (
  num: number,
  min: number,
  max: number
) => Math.min(Math.max(num, min), max)

export const lerp = (
  x: number,
  y: number,
  a: number
) => x * (1 - a) + y * a

export const invlerp = (
  x: number,
  y: number,
  a: number
) => clamp((a - x) / (y - x), 0, 1)

export const interpolate = (
  value: number,
  input: [x: number, y: number],
  output: [x: number, y: number],
) => lerp(output[0], output[1], invlerp(input[0], input[1], value))

export const isValidEmail = (email: string) => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regex.test(String(email).toLowerCase())
}
