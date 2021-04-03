import React from "react";

export default function Search(props) {
	const {city, setCity, setWeather, setMessage} = props;

	// The function used to fetc the data from openweathermap also passing the
	// city we have typed into the search input
	const fetchData = () => {
		// Display the message until the fetching is done
		setMessage("Loading...");
		try {
			fetch(
				`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
			)
				.then(res => res.json())
				.then(res => {
					if (res.cod === 200) {
						setMessage("");
						setWeather(res);
					} else {
						// If the city requested does not exist, display this message
						setMessage("City not found. Did you mispell it?");
					}
				});
		} catch (err) {
			console.log(("error: ", err));
		}
	};

	// This function will handle the geolocation for retreiving your coordinates
	// and look up the city according to them using the Geolocation API
	// For more information https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API
	const handleGeoLocation = () => {
		setMessage("Loading...");
		const success = position => {
			const lat = position.coords.latitude;
			const lon = position.coords.longitude;

			try {
				fetch(
					`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
				)
					.then(res => res.json())
					.then(res => {
						setMessage("");
						setWeather(res);
					});
			} catch (err) {
				console.log("Error: ", err);
			}
		};

		const error = () => {
			setMessage(
				"Your geolocation is not enabled, or maybe your browser does not support it!"
			);
		};

		navigator.geolocation.getCurrentPosition(success, error);
	};

	// A simple function to handle the input from the searchbar
	const handleValue = e => {
		setCity(e.target.value);
	};

	// This will make a callback to the fetchData function in order to
	// display the city you searched for
	const handleSubmit = e => {
		e.preventDefault();
		fetchData();
		e.target.reset();
	};

	return (
		<div className="search-input">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="search"
					id="search"
					placeholder="Enter city"
					onChange={handleValue}
				/>
			</form>
			<i class="fas fa-map-marker-alt geolocation" onClick={handleGeoLocation}></i>
		</div>
	);
}
