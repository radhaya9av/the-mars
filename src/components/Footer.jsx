import React from 'react'
import { Link } from 'arwes'
import { Wrapper, Inner } from '../styles/Footer.styles'


export default function () {
  return (
    <Wrapper animate>
      <Inner>
          Made with ❤️
        <Link href='https://github.com/radhaya9av/the-mars'>
          The Mars
        </Link>{' '}
          © 2024
      </Inner>
    </Wrapper>
  )
}