import React from 'react'
import { Container, Image, Text } from '@nextui-org/react'

export const NoFavorites = () => {
  return (
    <Container css={{
      display: 'flex',
      flexDirection: 'column',
      height: 'calc(100vh - 100px)',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Text h1>No favorites</Text>
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png'
        width={250}
        height={250}
        css={{
          opacity: 0.2
        }}
      />
    </Container>
  )
}
