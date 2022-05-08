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
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
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
