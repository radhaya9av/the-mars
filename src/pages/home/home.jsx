import Info from "../../components/Info"
import WeatherData from "../../components/WeatherData"

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
      </div>
    </>
  )
}

export default Home