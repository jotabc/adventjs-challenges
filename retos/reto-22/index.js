export const checkStepNumbers = (systemNames, stepNumbers) => {
  return systemNames.every((e, i) => stepNumbers[i] < stepNumbers[
    i + systemNames.slice(i + 1).indexOf(e) + 1
  ] + !(systemNames.lastIndexOf(e) - i)
  )
}

const systemNames = ['tree_1', 'tree_2', 'house', 'tree_1', 'tree_2', 'house']
const stepNumbers = [1, 33, 10, 2, 44, 20]

checkStepNumbers(systemNames, stepNumbers)
