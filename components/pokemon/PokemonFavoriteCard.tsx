import React, { FC } from 'react'

import { useRouter } from 'next/router'
import { Card, Grid } from '@nextui-org/react'

interface Props {
  pokemonId: number
}

export const PokemonFavoriteCard:FC<Props> = ({ pokemonId }) => {
  const router = useRouter()
  const handleFavouriteClick = () => {
    router.push(`/pokemon/${pokemonId}`, undefined, { scroll: false })
  }

  return (
    <Grid xs={12} lg={3} sm={6} md={4} xl={2}>
      <Card isPressable isHoverable onClick={handleFavouriteClick}>
        <Card.Body css={{ p: 30 }}>
          <Card.Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonId}.png`}
            width='100%'
            height='100%'
            onError={({ currentTarget }) => {
              const target = currentTarget as HTMLImageElement;
              target.onerror = null; //prevents looping
              target.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
            }}
          />
        </Card.Body>
      </Card>
    </Grid>
  )
}
