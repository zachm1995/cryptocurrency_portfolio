import React, { Component } from 'react'

class Calculate extends Component {
	constructor(props){
		super(props)
	}

	render() {
		return(
			<div>
			<h1>How much {this.props.active_currency.name} do you own?</h1>
			<form onSubmit={this.props.handleSubmit}>
				<div className='form-group'>
					<label>Enter amount owned</label><br/>
					<input type="text" onChange={this.props.handleChange} autoComplete='off' name='amount' placeholder='How much do you own?' value={this.props.amount} className='field' />
				</div>
				<div className='form-group'>
					<label>Enter amount owned</label><br/>
					<input type="submit" onChange={this.props.handleChange} value='Calculate Total' className='calculate-buttom' />
				</div>
			</form>
			</div>
		)
	}
}

export default Calculate