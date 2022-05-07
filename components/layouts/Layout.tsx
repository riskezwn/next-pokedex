import Head from 'next/head'
import React, { FC, ReactNode } from 'react'
import { Navbar, GenerationNav } from '../ui'

interface Props {
  children?: ReactNode,
  title?: string
}

export const Layout:FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <meta name='author' content='Enrique García' />
        <meta name='description' content={`Información sobre el Pokémon ${title}`} />
        <meta name='keywords' content={`${title}, pokemon, pokedex`} />
        <title>{title || 'Pokémon App'}</title>
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
