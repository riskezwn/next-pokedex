import React, { FC, ReactNode } from 'react'

import { Grid } from '@nextui-org/react'

import { SmallPokemon } from '../../interfaces'
import { PokemonCard } from './PokemonCard'

interface Props {
  children?: ReactNode
  pokemonList: SmallPokemon[]
}

export const PokemonList: FC<Props> = ({ pokemonList }) => {
  return (
    <Grid.Container gap={2} justify='flex-start'>
        {
          pokemonList.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon}/>
          ))
        }
      </Grid.Container>
  )
}
