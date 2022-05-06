import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'

import { Layout } from '../../components/layouts'
import { NoFavorites } from '../../components/ui'
import { localFavorites } from '../../utils'
import { PokemonFavorites } from '../../components/pokemon'

const Favorites: NextPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons)
  }, [])

  return (
    <Layout title='Pokédex - Favorites'>
      {
        favoritePokemons.length === 0
          ? (<NoFavorites />)
          : (<PokemonFavorites pokemons={favoritePokemons}/>)
      }
    </Layout>
  )
}

export default Favorites
