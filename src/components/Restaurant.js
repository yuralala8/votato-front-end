import React from 'react'
import { Header, Button, Popup, Grid } from 'semantic-ui-react'

class Restaurant extends React.Component {
	constructor(props){
		super(props)

		this.state = {

		}
	}

	restaurantClick = () => {
		this.props.handleClick(this.props.restaurant)
	}

	render(){

		let restaurantName = this.props.restaurant.restaurant.name
		let restaurantAddress = this.props.restaurant.restaurant.location.address
		let restaurantCity = this.props.restaurant.restaurant.location.city
		let restaurantRating = this.props.restaurant.restaurant['user_rating']['aggregate_rating']
		let restaurantColor = this.props.restaurant.restaurant['user_rating']['rating_color']
		let styles = {
			backgroundColor:`#${restaurantColor}`,
			}

return(
		<Popup
    trigger={<div className='restaurant' onClick={this.restaurantClick}>{restaurantName}</div>}
    flowing
    hoverable
  	>
    <Grid centered divided columns={1}>
      <Grid.Column textAlign='left' className='restaurant-grid'>
        <h2>{restaurantName} <span className="rating" style={styles}>{restaurantRating}</span></h2>
				<p><strong>{restaurantAddress}</strong></p>
        <Button onClick={this.restaurantClick}>Choose</Button>
      </Grid.Column>
    </Grid>
  </Popup>
			)
		}
}

export default Restaurant