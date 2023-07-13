import React, { FC } from 'react'

import NextLink from 'next/link'
import { Link } from '@nextui-org/react'

interface Props {
  text: string,
  href: string
}

export const GenerationLink:FC<Props> = ({ text, href }) => {
  return (
    <NextLink href={href}>
      <Link block color="primary">
        {text}
      </Link>
    </NextLink>
  )
}
