import React from 'react'
import { Blockquote } from 'arwes'
import { Wrapper } from '../styles/Error.styles'

export default function Error ({ children }) {
  return (
    <Wrapper>
      <Blockquote data-layer='alert'>{children}</Blockquote>
    </Wrapper>
  )
}