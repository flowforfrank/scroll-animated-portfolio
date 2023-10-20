export const classNames = (arr: Array<string | null | boolean | undefined>): string | undefined => arr?.filter(Boolean).join(' ')

export const scrollTo = (element: string, index?: number) => index
    ? document
        .querySelectorAll(element)?.[index]
        ?.scrollIntoView({ behavior: 'smooth' })
    : document
        .querySelector(element)
        ?.scrollIntoView({ behavior: 'smooth' })
