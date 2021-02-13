import React from 'react'
import Search from "./Search"

function Header(props) {
	return (
	<header>
		<Search submit={props.submit} getValue={props.getValue}/>
	</header>
	)
}

export default Header
