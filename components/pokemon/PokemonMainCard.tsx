import React, { FC, useState } from 'react'

import { Button, Card, Container, Text, Image } from '@nextui-org/react'
import confetti from 'canvas-confetti'

import { localFavorites } from '../../utils'

interface Props {
  id: number
  name: string
  sprites: {
    front_default: string,
    back_default: string,
    front_shiny: string,
    back_shiny: string,
   }
}

export const PokemonMainCard: FC<Props> = ({ id, name, sprites }) => {
  const [isInFavorites, setIsInFavorites] = useState(typeof window === 'object' && localFavorites.existsInFavorites(id))

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
  )
}
