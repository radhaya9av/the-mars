import React from 'react'
import { Loading } from 'arwes'
import { Wrapper } from '../styles/Loader.styles'

export default function Loader () {
  return (
    <div>
      <Wrapper>
        <Loading animate />
      </Wrapper>
    </div>
  )
}