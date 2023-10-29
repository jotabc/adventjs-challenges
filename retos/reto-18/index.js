export const dryNumber = (dry, numbers) => {
  return Array.from(Array(numbers).keys())
    .filter(number => `${number + 1}`.split('').includes(`${dry}`))
    .map(n => n + 1)
}
