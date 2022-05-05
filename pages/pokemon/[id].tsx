import React from 'react'

import { GetStaticProps, NextPage, GetStaticPaths } from 'next'
import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react'

import { Layout } from '../../components/layouts'
import { PokemonFull } from '../../interfaces'
import { pokeApi } from '../../api'

interface Props {
  pokemon: PokemonFull
}

const Pokemon: NextPage<Props> = ({ pokemon }) => {
  const pageTitle = pokemon.name[0].toUpperCase() + pokemon.name.substring(1)
  return (
    <Layout title={pageTitle}>
      <Grid.Container gap={2} css={{
        marginTop: '5px'
      }}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{
            padding: '30px'
          }}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.home.front_default || 'no_image.png'}
                alt={pokemon.name}
                width='100%'
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card css={{ padding: '1em' }}>
            <Card.Header css={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <Text h1 transform='capitalize'>{pokemon.name}</Text>
              <Button color='gradient' ghost>
                Save in favorites
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container display='flex' direction='row' gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
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
