import React from 'react'

import type { NextPage } from 'next'

import { Button } from '@nextui-org/react'

const Home: NextPage = () => {
  return (
    <>
      <h1>Hello World</h1>
      <Button color="gradient">
        This is a button
      </Button>
    </>
  )
}

export default Home
