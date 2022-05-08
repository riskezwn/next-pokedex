import React, { FC } from 'react'

import NextLink from 'next/link'
import { Button, Text } from '@nextui-org/react'

interface Props {
  text: string,
  href: string
}

export const GenerationLink:FC<Props> = ({ text, href }) => {
  return (
    <NextLink href={href} passHref>
      <Button color='error'>
        <Text b color='$white'>{text}</Text>
      </Button>
    </NextLink>
  )
}
