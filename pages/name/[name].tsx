import React from 'react'

import { GetStaticProps, NextPage, GetStaticPaths } from 'next'
import { Card, Grid, Text, Row } from '@nextui-org/react'

import { pokeApi } from '../../api'
import { PokemonFull, PokemonListResponse } from '../../interfaces'
import { Layout } from '../../components/layouts'
import { PokemonTypeCard, PokemonStats, PokemonMainCard, PokemonImageCard } from '../../components/pokemon'

interface Props {
  pokemon: PokemonFull
}

const PokemonByName: NextPage<Props> = ({ pokemon }) => {
  const { id, name, sprites, image, stats, types } = pokemon

  const pageTitle = name[0].toUpperCase() + name.substring(1)

  return (
    <Layout title={pageTitle}>
      <Grid.Container gap={2} css={{
        marginTop: '5px'
      }}>
        <Grid xs={12} sm={4} direction='column'>
            <PokemonImageCard name={name} image={image}/>
            <Row css={{
              marginTop: '10px'
            }}>
              {
                types.map(({ type }) => (
                  <PokemonTypeCard key={type.name} type={type.name}/>
                ))
              }
            </Row>
        </Grid>
        <Grid xs={12} sm={8}>
          <PokemonMainCard id={id} sprites={sprites} name={name}/>
        </Grid>
      </Grid.Container>
      <Grid.Container gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ p: 30 }}>
            <Text h1>{id}</Text>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card hoverable css={{
            padding: '1em'
          }}>
            <Text h3 margin={3}>Base stats</Text>
            <PokemonStats stats={stats}/>
          </Card>
        </Grid>
      </Grid.Container>
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
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string }
  const { data } = await pokeApi.get<PokemonFull>(`/pokemon/${name}`)

  const pokemonData = {
    name: data.name,
    id: data.id,
    image: data.sprites.other?.home.front_default,
    sprites: {
      front_default: data.sprites.front_default,
      back_default: data.sprites.back_default,
      front_shiny: data.sprites.front_shiny,
      back_shiny: data.sprites.back_shiny
    },
    types: data.types,
    stats: [
      { label: 'HP', value: data.stats[0].base_stat },
      { label: 'Attack', value: data.stats[1].base_stat },
      { label: 'Defense', value: data.stats[2].base_stat },
      { label: 'Special Attack', value: data.stats[3].base_stat },
      { label: 'Special Defense', value: data.stats[4].base_stat },
      { label: 'Speed', value: data.stats[5].base_stat }
    ]
  }

  return {
    props: {
      pokemon: pokemonData
    }
  }
}

export default PokemonByName
