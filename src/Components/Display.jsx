import React from 'react'

function Display(props) {
	const imgUrl = `https://openweathermap.org/img/wn/${props.city.list[0].weather[0].icon}@2x.png`
	
	return (
		<div className="container">
			<div className="info">
				<div className="temp-container">
					<div className="title">
						<h1>{props.city.city.name}</h1>
						<h4>{props.currentDay(new Date())} {`${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`}</h4>
					</div>
					<div className="temp-display">
						<div className="main-temp">
							<span className="temp">{props.city.list[0].main.temp}°</span>
							<div className="min-max">
								<span>{props.city.list[0].main.temp_min}</span>
								<span>{props.city.list[0].main.temp_max}</span>
							</div>
						</div>	
					</div>
					<div className="extra-info">
							<img src={imgUrl}></img>
							<span>{props.city.list[0].weather[0].description}</span>
							<span>Feels like: {props.city.list[0].main.feels_like}°</span>
							<span>Humidity: {props.city.list[0].main.humidity}%</span>
					</div>					
				</div>
			</div>
		</div>
	)
}

export default Display
