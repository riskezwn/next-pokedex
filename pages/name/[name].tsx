import React from 'react'

import { GetStaticProps, NextPage, GetStaticPaths } from 'next'

import { pokeApi } from '../../api'
import { PokemonFull, PokemonListResponse } from '../../interfaces'
import { Layout } from '../../components/layouts'
import { PokemonPage } from '../../components/pokemon'
import { getPokemonInfo } from '../../utils'

interface Props {
  pokemon: PokemonFull
}

const PokemonByName: NextPage<Props> = ({ pokemon }) => {
  const { name } = pokemon
  const pageTitle = name[0].toUpperCase() + name.substring(1)

  return (
    <Layout title={pageTitle}>
      <PokemonPage {...pokemon}/>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  const allPokemon: string[] = data.results.map(({ name }) => name)
  return {
    paths: allPokemon.map(name => ({
      params: { name }
    })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string }
  const pokemon = await getPokemonInfo(name)

  if (!pokemon) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      pokemon
    }
  }
}

export default PokemonByName
