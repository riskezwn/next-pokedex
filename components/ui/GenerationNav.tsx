import React from 'react'

import { Button, Row } from '@nextui-org/react'

import { GenerationLink } from './GenerationLink'

const GENERATIONS = [
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
  }
]

export const GenerationNav = () => {
  return (
    <Row justify='center' wrap='wrap'>
      <Button.Group>
        {
          GENERATIONS.map(({ text, href }) => (
            <GenerationLink key={text} text={text} href={href}/>
          ))
        }
      </Button.Group>
    </Row>
  )
}
