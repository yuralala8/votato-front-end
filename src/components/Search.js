import React from 'react'

class Search extends React.Component {

	constructor() {
		super()

		this.state = {
			searchTerm: "",
			address: ""
		}
	}

	handleChange = () => {
		this.setState({
			searchTerm: this.searchTerm.value,
			address: this.address.value,
		})
	}


	handleClick = (event) => {
		event.preventDefault()

		let location = encodeURIComponent(this.state.address).replace(/%20/g,'+').replace(/%2C/, ',')

		fetch(`http://localhost:3000/api/v1/restaurants/${this.state.searchTerm}/${location}`)
			.then(resp => resp.json())
			.then(json => this.props.getRestaurantData(json))
	}


	render() {

		return (
			<div className="search-wrapper">
				<form onSubmit={this.handleClick} className="search-form">
					<i className="search icon"></i>
					<label>Looking for</label><input ref={node => this.searchTerm = node} type="text" value={this.state.searchTerm} onChange={this.handleChange} required/>
					<label>Nearby</label><input ref={node => this.address = node} type="text" value={this.state.address} onChange={this.handleChange} required/>
				<input className="ui button" type="submit" value="Search Restaurants" />
				</form>
			</div>
		)

	}

}



export default Search
