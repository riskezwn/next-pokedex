import React, { FC, ReactNode } from 'react'

import Head from 'next/head'

import { Navbar, GenerationNav } from '../ui'

interface Props {
  children?: ReactNode,
  title?: string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout:FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <meta name='author' content='Enrique García' />
        <meta name='description' content={`Pokémon info about ${title}`} />
        <meta name='keywords' content={`${title}, pokemon, pokedex`} />
        <title>{title || 'Pokémon App'}</title>
        <meta property="og:title" content={`Pokémon info about ${title}`} />
        <meta property="og:description" content={`Page about ${title}`} />
        <meta property="og:image" content={`${origin}/banner.png`} />
      </Head>
      <Navbar />
      <GenerationNav />
      <main style={{
        padding: '0 20px'
      }}>
        { children }
      </main>
    </>
  )
}
