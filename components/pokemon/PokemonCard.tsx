import React, { FC } from 'react'

import { Card, Grid, Row, Text } from '@nextui-org/react'

import { SmallPokemon } from '../../interfaces'

interface Props {
  pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const { img, name, id } = pokemon
  return (
    <Grid xs={12} lg={3} sm={6} md={4} xl={2} key={id}>
      <Card hoverable clickable>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={img} width='100%' height={200}/>
        </Card.Body>
        <Card.Footer>
          <Row justify='space-between'>
            <Text transform='capitalize' b>{name}</Text>
            <Text>{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  )
}
