import React from 'react'

import { useTheme as useNextTheme } from 'next-themes'
import type { NextPage } from 'next'

import { Button, Switch, useTheme } from '@nextui-org/react'

const Home: NextPage = () => {
  const { setTheme } = useNextTheme()
  const { isDark } = useTheme()
  return (
    <>
      <h1>Hello World</h1>
      <Button color="gradient">
        This is a button
      </Button>
      <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      />
    </>
  )
}

export default Home
