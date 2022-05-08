import React from 'react'

import { GetStaticProps, NextPage, GetStaticPaths } from 'next'

import { PokemonFull } from '../../interfaces'
import { Layout } from '../../components/layouts'
import {  PokemonPage } from '../../components/pokemon'
import { getPokemonInfo } from '../../utils'

interface Props {
  pokemon: PokemonFull
}

const Pokemon: NextPage<Props> = ({ pokemon }) => {
  const { name } = pokemon
  const pageTitle = name[0].toUpperCase() + name.substring(1)

  return (
    <Layout title={pageTitle}>
      <PokemonPage {...pokemon}/>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const allPokemon = [...Array(151)].map((value, i) => `${i + 1}`)
  return {
    paths: allPokemon.map(id => ({
      params: { id }
    })),
    // fallback: false
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }
  const pokemon = await getPokemonInfo(id)

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
    },
    revalidate: 86400 // 60 * 60 * 24
  }
}

export default Pokemon
