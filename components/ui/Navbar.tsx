import React from 'react'
import Image from 'next/image'
import { useTheme as useNextTheme } from 'next-themes'
import { Spacer, Switch, Text, useTheme } from '@nextui-org/react'
import { MoonIcon, SunIcon } from '../../assets'

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
      <Text h2 weight='bold'>Pokédex</Text>
      <Spacer css={{ flex: 1 }}/>
      <Text b margin='1em'>Favourites</Text>
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
