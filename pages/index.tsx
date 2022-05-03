import React from 'react'

import { GetStaticProps } from 'next'
import type { NextPage } from 'next'

import { Layout } from '../components/layouts'
import { pokeApi } from '../api'
import { PokemonListResponse, SmallPokemon } from '../interfaces'
import { PokemonList } from '../components/pokemon'

interface Props {
  pokemons: SmallPokemon[]
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title='Pokédex'>
      <PokemonList pokemonList={pokemons} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${i + 1}.png`
  }))

  return {
    props: {
      pokemons
    }
  }
}

export default Home
