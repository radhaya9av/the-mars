import styled, { css } from 'styled-components'
import ReactSlider from 'react-slider'
import { transparentize } from 'polished'

const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  border: 1px solid transparent;
  background: transparent;
  ${props =>
    props.index === 0 &&
    css`
      background: ${props =>
        transparentize(0.9, props.theme.color.success.base)};
      border-color: ${props =>
        transparentize(0.3, props.theme.color.success.base)};
    `}
`
const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 25px;
`

const StyledThumb = styled.div`
  height: 25px;
  line-height: 25px;
  text-align: center;
  background: ${props => transparentize(0.8, props.theme.color.success.base)};
  color: #00ff00;
  font-size: 18px;
  width: 50px;
  cursor: grab;
`