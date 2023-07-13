import React from 'react'

import { Button, Navbar, Row } from '@nextui-org/react'

import { GenerationLink } from './GenerationLink'
import { useRouter } from 'next/router'

export const GENERATIONS = [
  {
    text: 'Gen I',
    href: '/generation/1'
  },
  {
    text: 'Gen II',
    href: '/generation/2'
  },
  {
    text: 'Gen III',
    href: '/generation/3'
  },
  {
    text: 'Gen IV',
    href: '/generation/4'
  },
  {
    text: 'Gen V',
    href: '/generation/5'
  },
  {
    text: 'Gen VI',
    href: '/generation/6'
  },
  {
    text: 'Gen VII',
    href: '/generation/7'
  },
  {
    text: 'Gen VIII',
    href: '/generation/8'
  },
  {
    text: 'Gen IX',
    href: '/generation/9'
  }
]

export const GenerationNav = () => {
  const router = useRouter()
  
  return (
    <>
      {
        GENERATIONS.map(({ text, href }) => (
          <Navbar.Link isActive={router.asPath === href} key={text} href={href}>{text}</Navbar.Link>
        ))
      }
    </>
  )
}
