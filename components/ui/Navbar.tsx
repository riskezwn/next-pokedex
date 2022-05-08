import React from 'react'

import Image from 'next/image'
import NextLink from 'next/link'
import { useTheme as useNextTheme } from 'next-themes'
import { Spacer, Switch, Text, useTheme, Link } from '@nextui-org/react'

import { MoonIcon, SunIcon } from '../../assets'
import logo from '../../assets/logo.png'

export const Navbar = () => {
  const { setTheme } = useNextTheme()
  const { theme, isDark } = useTheme()
  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0 20px',
      backgroundColor: theme?.colors.background.value
    }}>
      <Image
        src={logo}
        alt='app icon'
        width={40}
        height={40}
      />
      <NextLink href="/" passHref>
        <Link css={{ marginLeft: '5px' }}>
          <Text h2 weight='bold'>Pokédex</Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }}/>
      <NextLink href="/favorites" passHref>
        <Link>
          <Text b margin='1em'>Favorites</Text>
        </Link>
      </NextLink>
      <Switch
        checked={isDark}
        size='lg'
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        iconOn={<SunIcon size={100}/>}
        iconOff={<MoonIcon />}
      />
    </div>
  )
}
