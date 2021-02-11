import React from 'react'
import Search from "./Search"

function Header(props) {
	return (
	<header>
		<span>Simple React WeatherApp</span>
		<Search submit={props.submit} getValue={props.getValue}/>
		<span>Made by Daniel Ulises</span>
	</header>
	)
}

export default Header
