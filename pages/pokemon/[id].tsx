import React, { useState } from 'react'

import { GetStaticProps, NextPage, GetStaticPaths } from 'next'
import { Button, Card, Container, Grid, Text, Image, Row } from '@nextui-org/react'

import confetti from 'canvas-confetti'

import { Layout } from '../../components/layouts'
import { PokemonTypeCard } from '../../components/pokemon/PokemonTypeCard'
import { PokemonStats } from '../../components/pokemon/PokemonStats'

import { PokemonFull } from '../../interfaces'
import { pokeApi } from '../../api'
import { localFavorites } from '../../utils'

interface Props {
  pokemon: PokemonFull
}

const Pokemon: NextPage<Props> = ({ pokemon }) => {
  const { id, name, sprites, image, stats, types } = pokemon
  const [isInFavorites, setIsInFavorites] = useState(typeof window === 'object' && localFavorites.existsInFavorites(id))

  const pageTitle = name[0].toUpperCase() + name.substring(1)

  const handleToggleFavorite = () => {
    localFavorites.toggleFavorite(id)
    setIsInFavorites(!isInFavorites)

    if (isInFavorites) return

    confetti({
      zIndex: 1,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 0.9,
        y: 0.1
      }
    })
  }

  return (
    <Layout title={pageTitle}>
      <Grid.Container gap={2} css={{
        marginTop: '5px'
      }}>
        <Grid xs={12} sm={4} direction='column'>
          <Card hoverable css={{
            padding: '30px'
          }}>
            <Card.Body>
              <Card.Image
                src={image || 'no_image.png'}
                alt={name}
                width='100%'
                height={200}
              />
            </Card.Body>
          </Card>
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
          <Card css={{ padding: '1em' }}>
            <Card.Header css={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap'
            }}>
              <Text h1 transform='capitalize'>{name}</Text>
              <Button
                color='gradient'
                ghost={!isInFavorites}
                onClick={handleToggleFavorite}>
                  {isInFavorites ? 'Remove from favorites' : 'Add to favorites'}
              </Button>
            </Card.Header>
            <Card.Body css={{
              display: 'flex',
              justifyContent: 'center'
            }}>
              <Text h3>Sprites</Text>
              <Container display='flex' direction='row' gap={0}>
                <Image
                  src={sprites.front_default}
                  alt={name}
                  width={100}
                  height={100}
                />
                <Image
                  src={sprites.back_default}
                  alt={name}
                  width={100}
                  height={100}
                />
                <Image
                  src={sprites.front_shiny}
                  alt={name}
                  width={100}
                  height={100}
                />
                <Image
                  src={sprites.back_shiny}
                  alt={name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
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

export default Pokemon
