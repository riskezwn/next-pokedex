import React, { FC } from 'react'
import { Card, Col, Text } from '@nextui-org/react'

interface Props {
  type: string
}

const TYPES: { [key: string]: any } = {
  normal: '#0070F3',
  fire: '#F08030',
  water: '#6890F0',
  electric: '#f5a623',
  grass: '#17c964',
  ice: '#BFFFEA',
  fighting: '#C03028',
  poison: '#5E1DAD',
  ground: '#8E4D0B',
  flying: '#7CDBCF',
  psychic: '#ff4ecd',
  bug: '#A8B820',
  rock: '#3d2705',
  ghost: '#1c0631',
  dragon: '#077457',
  dark: '#666666',
  steel: '#9eb7b8',
  fairy: '#FFB8D6'
}

export const PokemonTypeCard: FC<Props> = ({ type }) => {
  return (
    <Col>
      <Card css={{
        backgroundColor: TYPES[type]
      }}>
        <Text h6 size={15} color="white" transform='capitalize'>
          {type}
        </Text>
      </Card>
    </Col>
  )
}
