import React, {useState} from "react";
import Display from "./Components/Display/Display";
import Search from "./Components/Search/Search";
import "./styles.css";

export default function App() {
	const [weather, setWeather] = useState([]);
	const [city, setCity] = useState("");
	const [message, setMessage] = useState("Welcome to the simple weather app!");

	return (
		<>
			<h1>Simple Weather App</h1>
			<main>
				<Search
					city={city}
					setCity={setCity}
					setWeather={setWeather}
					setMessage={setMessage}
				/>
				<Display weather={weather} message={message} />
			</main>
			<footer>
				<a
					href="https://github.com/daniel-ulises/weather-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fab fa-github"></i>
				</a>
			</footer>
		</>
	);
}
