import React from 'react'
import { withSounds } from 'arwes'
import { withTheme } from 'theming'
import {StyledTrack, StyledThumb, } from '../styles/Slider.styles'


const ThemedTrack = withTheme(StyledTrack)

function Tracks (props, state) {
  return <ThemedTrack {...props} {...state} />
}

const ThemedThumb = withTheme(StyledThumb)
const Thumb = (props, state) => {
  return (
    <div {...props}>
      <ThemedThumb>{state.valueNow}</ThemedThumb>
    </div>
  )
}

function Slider ({ value, max, onAfterChange, sounds }) {
  function handleSelectValue (value) {
    sounds.typing.play()
    onAfterChange(value)
  }
  return (
    <StyledSlider
      value={value}
      max={max}
      onAfterChange={handleSelectValue}
      onSliderClick={handleSelectValue}
      renderTrack={Tracks}
      renderThumb={Thumb}
    />
  )
}

export default withSounds()(props => <Slider {...props} />)