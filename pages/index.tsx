import React from 'react'

import type { NextPage } from 'next'

import { Button } from '@nextui-org/react'
import { Layout } from '../components/layouts'

const Home: NextPage = () => {
  return (
    <Layout title='Pokédex'>
      <h1>Hello World</h1>
      <Button color="gradient">
        This is a button
      </Button>
    </Layout>
  )
}

export default Home
