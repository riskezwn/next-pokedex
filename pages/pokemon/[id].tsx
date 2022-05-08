import React from 'react'

import { GetStaticProps, NextPage, GetStaticPaths } from 'next'
import { Card, Grid, Text, Row } from '@nextui-org/react'

import { PokemonFull } from '../../interfaces'
import { Layout } from '../../components/layouts'
import { PokemonTypeCard, PokemonStats, PokemonMainCard, PokemonImageCard } from '../../components/pokemon'
import { getPokemonInfo } from '../../utils'

interface Props {
  pokemon: PokemonFull
}

const Pokemon: NextPage<Props> = ({ pokemon }) => {
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
  const allPokemon = [...Array(898)].map((value, i) => `${i + 1}`)
  return {
    paths: allPokemon.map(id => ({
      params: { id }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }

  return {
    props: {
      pokemon: await getPokemonInfo(id)
    }
  }
}

export default Pokemon
