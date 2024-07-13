import React from 'react'
import {
  FiArrowLeft,
  FiPlay,
  FiPause,
  FiArrowRight,
  FiRotateCcw,
  FiRotateCw
} from 'react-icons/fi'
import { IconContext } from 'react-icons'
import {Photo, Wrapper, Controlls, Photos, Counter} from '../styles/Carousel.styles'


const ONE_SECOND_IN_MS = 1000


export default class Carousel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentPhoto: 0,
      ticker: -1,
      isPlaying: false,
      intervalDuration: ONE_SECOND_IN_MS
    }
  }

  render () {
    return (
      <Wrapper>
        <IconContext.Provider value={{ size: '24px' }}>
          <Counter>
            {this.state.currentPhoto + 1} / {this.props.photos.length}{' '}
            <span>
              {(ONE_SECOND_IN_MS / this.state.intervalDuration).toFixed(1)} FPS
            </span>
          </Counter>
          <Controlls>
            <FiArrowLeft onClick={this.selectPreviousPhoto.bind(this)} />
            <FiRotateCcw onClick={this.slowDownInterval.bind(this)} />
            {this.state.isPlaying ? (
              <FiPause onClick={this.handlePlayPauseClick.bind(this)} />
            ) : (
              <FiPlay onClick={this.handlePlayPauseClick.bind(this)} />
            )}
            <FiRotateCw onClick={this.speedUpInterval.bind(this)} />
            <FiArrowRight onClick={this.selectNextPhoto.bind(this)} />
          </Controlls>
        </IconContext.Provider>
        <Photos>
          {this.props.photos.map((src, index) => (
            <Photo key={src} show={index === this.state.currentPhoto}>
              <img src={src} alt={`Mars Footage ${index}`} />
            </Photo>
          ))}
        </Photos>
      </Wrapper>
    )
  }
}
