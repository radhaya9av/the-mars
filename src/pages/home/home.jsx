import Info from "../../components/Info"
import PreviousWeather from "../../components/PreviousWeather"
import Unit from "../../components/Unit"
import WeatherData from "../../components/WeatherData"
import "../../styles/Home.scss"

function Home() {
  return (
    <>
      <div className = "MarsWeather">
        <div>
          <h1 className='main-title'>
              Latest weather at Elysium Plantitia
          </h1>
        </div>
        <div>
          <WeatherData />
        </div>
        <div className = "InfoWrapper">
          <Info />
          <Unit />
        </div>
      </div>
      <div>
        <PreviousWeather />
      </div>
    </>
  )
}

export default Home