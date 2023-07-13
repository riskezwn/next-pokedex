import React from 'react'

import { GetStaticPaths, GetStaticProps } from 'next'
import type { NextPage } from 'next'

import { Layout } from '../../components/layouts'
import { pokeApi } from '../../api'
import { Generation as GenerationProps, PokemonListResponse, SmallPokemon } from '../../interfaces'
import { PokemonList } from '../../components/pokemon'
import { allGenerations } from '../../utils'

interface Props {
  pokemons: SmallPokemon[]
}

const Generation: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title='Pokédex'>
      <PokemonList pokemonList={pokemons} />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const allPokemon = [...Array(9)].map((value, i) => `${i + 1}`)
  return {
    paths: allPokemon.map(gen => ({
      params: { gen }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { first, count }: GenerationProps = allGenerations.find(({ gen }) => gen === params?.gen) as GenerationProps
  const { data } = await pokeApi.get<PokemonListResponse>(`/pokemon?offset=${first}&limit=${count}`)

  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + (first + 1),
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${i + (first + 1)}.png`
  }))

  return {
    props: {
      pokemons
    }
  }
}

export default Generation
