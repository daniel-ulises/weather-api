import React from 'react'

function Display(props) {
	const cards = []
	const generateCards = () => {
		for(let i = 0; i < props.city.list.length; i += 8) {
			cards.push(
				<div className="info">
					<div className="temp-container">
						<div className="title">
							<h1>{props.city.city.name}</h1>
							<h4>{(props.currentDay(props.city.list[i].dt_txt))}</h4>
						</div>
						<div className="temp-display">
							<div className="main-temp">
								<span className="temp">{props.city.list[i].main.temp}°</span>
								<div className="min-max">
									<span>{props.city.list[i].main.temp_min}°</span>
									<span>{props.city.list[i].main.temp_max}°</span>
								</div>
							</div>	
						</div>
						<div className="extra-info">
							<img src={`https://openweathermap.org/img/wn/${props.city.list[i].weather[0].icon}@2x.png`}></img>
							<span>{props.city.list[i].weather[0].description}</span>
							<span>Feels like: {props.city.list[i].main.feels_like}°</span>
							<span>Humidity: {props.city.list[i].main.humidity}%</span>
						</div>					
					</div>
				</div>
				)
		}
		return cards
	}

	console.log(cards)

return (
	<div className="container">
		{generateCards()} 
	</div>
	)
}

export default Display
