import styled, { css } from 'styled-components'

const DEBUG_PHOTO_ANIMATION = false

const Photo = styled.div`
  width: 100%;
  ${DEBUG_PHOTO_ANIMATION
    ? css`
        width: 25%;
        opacity: ${props => (props.show ? 1 : 0.2)};
      `
    : css`
        display: ${props => (props.show ? 'initial' : 'none')};
      `}

  img {
    width: 100%;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const Controlls = styled.div`
  padding: 1em;
  display: flex;

  svg {
    cursor: pointer;
    margin: 0 1em;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }
`

const Photos = styled.div`
  user-select: none;
`

const Counter = styled.div`
  padding: 1em;
`