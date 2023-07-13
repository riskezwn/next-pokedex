import React, { FC } from 'react'

import { Card, Grid, Text } from '@nextui-org/react'

interface Props {
  description: string
  genus: string
  height: number
  weight: number
  id: number
  ability: string
}

export const PokemonInfoCard: FC<Props> = ({ description, genus, height, weight, id, ability }) => {
  return (
    <Card isHoverable css={{ p: 30 }}>
      <Text h1>{id}</Text>
      <Text h5 transform='uppercase' css={{
        marginBottom: '20px',
        opacity: 0.7
      }}>
        {genus}
      </Text>
      <Text css={{
        marginBottom: '30px'
      }}>
        {description}
      </Text>
      <Grid.Container gap={2}>
        <Grid sm={12} xs={12}>
          <Card variant='bordered' css={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100px'
          }}> 
              <Text b size='10px'>ABILITY</Text>
              <Text h3 transform='capitalize'>{ability}</Text>
          </Card>
        </Grid>
        <Grid sm={6} xs={6}>
          <Card variant='bordered' css={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '200px'
          }}> 
              <Text b size='10px'>WEIGHT</Text>
              <div>
                <Text b h2 css={{ display: 'inline', margin: 0 }}>{weight}</Text>
                <Text small b css={{ opacity: 0.7 }}>KG</Text>
              </div>
          </Card>
        </Grid>
        <Grid sm={6} xs={6}>
          <Card variant='bordered' css={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '200px'
          }}> 
              <Text b size='10px'>HEIGHT</Text>
              <div>
                <Text b h2 css={{ display: 'inline', margin: 0 }}>{height}</Text>
                <Text small b css={{ opacity: 0.7 }}>CM</Text>
              </div>
          </Card>
        </Grid>
      </Grid.Container>
    </Card>
  )
}
