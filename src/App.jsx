import React, {useState, useEffect} from 'react'
import Header from "./Components/Header"
import Display from "./Components/Display"
import "./App.css"

function App() {
	const [location, setLocation] = useState()
	const [forecast, setForecast] = useState([])
	const [cards, setCards] = useState()

	useEffect(() => {
		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(onSuccess)
		}
		
		function onSuccess(position) {
			const {
				latitude,
				longitude
			} = position.coords;
	

		   fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&APPID=95497c16aeb66383ce86bd521556a5b5&units=metric`)
		   .then(res => res.json())
		   .then(data => setForecast(data))		
		}
		
	}, [])

	const searchValue = e => {
		setLocation(e.target.value)
	}

	const foreCast = e => {
		e.preventDefault() 

		fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=95497c16aeb66383ce86bd521556a5b5&units=metric`)
		.then(res => res.json())
		.then(data => setForecast(data))

		document.querySelector("input").value = ""
	}

	const getDay = date => {
		switch (new Date(date).getDay()) {
			case 0: return "Sunday";		
			case 1:	return "Monday";
			case 2:	return "Tuesday";
			case 3: return "Wednesday";
			case 4: return "Thursday";
			case 5: return "Friday";
			case 6: return "Saturday";
			default:
				break;
		}
	}

	return (
		<>
			<Header submit={foreCast} getValue={searchValue}/>
			{forecast.list ? <Display city={forecast} currentDay={getDay} setCards={setCards}/> 
							: forecast.cod == 404 ? 
							<div className="container">
								<div class="info loading">
									<h3>Location does not exist, try a different one!</h3>
								</div>
							</div>
							: <div className="container">
								<div className="loading">
									<h2>Getting your location...</h2>
									<p>If your browser does not have geolocation enabled, proceed by searching for a city</p>
								</div>
							</div>}
		</>
	)
}

export default App
