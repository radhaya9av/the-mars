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
    </>
  )
}

export default Home