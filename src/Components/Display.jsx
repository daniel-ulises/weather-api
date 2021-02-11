import React from 'react'

function Display(props) {

	return (
		<div className="container">
			<div className="info">
				<div>
					<div className="title">
						<h1>{props.city.city.name}</h1>
						<h4>{`${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`}</h4>
					</div>
					<div className="temp-display">
						<div className="main-temp">
							<div className="min-max">
								<span>{props.city.list[0].main.temp_min}</span>
								<span>{props.city.list[0].main.temp_max}</span>
							</div>
							<span className="temp">{props.city.list[0].main.temp}°</span>
						</div>
						<div className="extra-info">
							<span>{props.city.list[0].main.feels_like}</span>
							<span>{props.city.list[0].weather[0].main}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Display
