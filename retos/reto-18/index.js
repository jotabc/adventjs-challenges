export const sortToys = (toys, positions) => {
  return toys.sort((a, b) =>
    positions[toys.indexOf(a)] - positions[toys.indexOf(b)]
  )
}

// usamos un sort para poder ordenar el array de toys segun su indice.
// aqui positions[toys.indexOf(a)], estamos encontrando el indice de cada toy segun el array de posiciones quearia 2, 3, 1, 0 ya "relacionado a su toy" es decir lo veremos tipo 'ball' position 2 etc
// luego con esto positions[toys.indexOf(b)] obtenemos el mismo array 'ball' position 2 etc etc.   pero al colocarle - este ordenara de menor a mayor. (a sea menor que b)
