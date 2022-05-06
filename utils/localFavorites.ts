const toggleFavorite = (id: number) => {
  const localStorage = window.localStorage
  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')

  if (favorites.includes(id)) {
    favorites = favorites.filter(pokeId => pokeId !== id)
  } else {
    favorites.push(id)
  }

  localStorage.setItem('favorites', JSON.stringify(favorites))
}

const existsInFavorites = (id: number): boolean => {
  const localStorage = window.localStorage
  const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')

  return favorites.includes(id)
}

const pokemons = (): number[] => {
  const localStorage = window.localStorage
  return JSON.parse(localStorage.getItem('favorites') || '[]')
}

export default {
  toggleFavorite,
  existsInFavorites,
  pokemons
}
