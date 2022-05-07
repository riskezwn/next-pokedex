import React, { FC } from 'react'

import NextLink from 'next/link'
import { Button, Link } from '@nextui-org/react'

interface Props {
  text: string,
  href: string
}

export const GenerationLink:FC<Props> = ({ text, href }) => {
  return (
    <Button color='error'>
      <NextLink href={href} passHref>
        <Link color={'text'}>{text}</Link>
      </NextLink>
    </Button>
  )
}
