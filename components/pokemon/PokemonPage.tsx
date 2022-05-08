import React, { FC } from 'react'

import { Card, Grid, Row, Text } from '@nextui-org/react'

import { PokemonImageCard } from './PokemonImageCard'
import { PokemonInfoCard } from './PokemonInfoCard'
import { PokemonMainCard } from './PokemonMainCard'
import { PokemonStats } from './PokemonStats'
import { PokemonTypeCard } from './PokemonTypeCard'
import { PokemonFull } from '../../interfaces'


export const PokemonPage: FC<PokemonFull> = ( { id, name, sprites, image, stats, types, height, weight, genus, description, ability } ) => {
  return (
    <>
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
          <PokemonInfoCard id={id} weight={weight} height={height} description={description} genus={genus} ability={ability}/>
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
    </>
  )
}
