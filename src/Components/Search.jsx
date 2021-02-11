import React from 'react'

function Search(props) {
	return (
		<div className="search">
			<form onSubmit={props.submit}>
				<input type="search" name="search" id="search" placeholder="Input city name" onChange={props.getValue}/>
			</form>
		</div>
	)
}

export default Search
