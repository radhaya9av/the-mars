import Info from "../../components/Info"
import Unit from "../../components/Unit"
import WeatherData from "../../components/WeatherData"
import "../../styles/Home.scss"

function Home() {
  return (
    <>
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
    </>
  )
}

export default Home