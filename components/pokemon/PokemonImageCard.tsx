import React, { FC } from 'react'

import { Card } from '@nextui-org/react'

interface Props {
  name: string
  image: string
}

export const PokemonImageCard:FC<Props> = ({ name, image }) => {
  return (
    <Card isHoverable css={{
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
  )
}
