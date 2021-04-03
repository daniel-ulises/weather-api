import React from "react";

export default function Display(props) {
	const {weather, message} = props;

	const renderSuccess = () => {
		return (
			<div className="weather-container">
				<div className="weather-display">
					<p>{new Date().toLocaleDateString("es-ES")}</p>
					<h2>{weather.name}</h2>
					<span className="temp">{weather.main.temp} °C</span>
					<span className="wcondition">{weather.weather[0].description}</span>
					<span>
						<img
							src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
							alt="weather icon"
							className="weather-icon"
						/>
					</span>
				</div>
			</div>
		);
	};

	return (
		<>
			{message.length > 1 ? (
				<div className="weather-container">
					<div className="weather-display">
						<h3>{message}</h3>
					</div>
				</div>
			) : weather.cod === 200 ? (
				renderSuccess()
			) : (
				<div className="weather-container">
					<div className="weather-display">
						<h3>City does not exist. Did you misspell it?</h3>
					</div>
				</div>
			)}
		</>
	);
}
