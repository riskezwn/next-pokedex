import React from 'react'

import Image from 'next/image'
import NextLink from 'next/link'
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, Text, useTheme, Link, Navbar } from '@nextui-org/react'

import { MoonIcon, SunIcon } from '../../assets'
import logo from '../../assets/logo.png'
import { GenerationNav } from './GenerationNav'

export const Nav = () => {
  const { setTheme } = useNextTheme()
  const { theme, isDark } = useTheme()

  return (
    <Navbar isBordered variant="floating">
      <Navbar.Brand>
        <Image
          src={logo}
          alt='app icon'
          width={40}
          height={40}
        />
        <NextLink href="/" passHref>
          <Link css={{ marginLeft: '5px', marginTop: '10px' }}>
            <Text h2 weight='bold'>Pokédex</Text>
          </Link>
        </NextLink>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs" variant="highlight-rounded">
        <GenerationNav />
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Link color="inherit" href="#">
          <NextLink href="/favorites">
            <Link>
              <Text b css={{margin: '1em'}}>Favorites</Text>
            </Link>
          </NextLink>
        </Navbar.Link>
        <Navbar.Item>
          <Switch
            checked={isDark}
            size='lg'
            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
            iconOn={<SunIcon size={100}/>}
            iconOff={<MoonIcon />}
          />
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>  
  )
}
