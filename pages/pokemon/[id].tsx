import React from 'react'

import { GetStaticProps, NextPage, GetStaticPaths } from 'next'
import { Text } from '@nextui-org/react'

import { Layout } from '../../components/layouts'
import { PokemonFull } from '../../interfaces'
import { pokeApi } from '../../api'

interface Props {
  pokemon: PokemonFull
}

const Pokemon: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title='Algun Pokémon'>
      <Text h1 transform='capitalize'>{pokemon.name}</Text>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const allPokemon = [...Array(151)].map((value, i) => `${i + 1}`)
  return {
    paths: allPokemon.map(id => ({
      params: { id }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }
  const { data } = await pokeApi.get<PokemonFull>(`/pokemon/${id}`)

  return {
    props: {
      pokemon: data
    }
  }
}

export default Pokemon
