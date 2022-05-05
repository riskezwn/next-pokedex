import React from 'react'
import Image from 'next/image'
import { useTheme as useNextTheme } from 'next-themes'
import { Spacer, Switch, Text, useTheme, Link } from '@nextui-org/react'
import { MoonIcon, SunIcon } from '../../assets'
import NextLink from 'next/link'

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
      backgroundColor: theme?.colors.backgroundContrast.value
    }}>
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
        alt='app icon'
        width={70}
        height={70}
      />
      <NextLink href="/" passHref>
        <Link>
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
