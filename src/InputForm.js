import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputForm extends Component {
  	state = {
    	text: '',
    }
	
	handleChange = (event) => {
      	const text = event.target.value
    	this.setState(()=> ({
        	text: text,
        }))
    }

	handleSubmit = (event,username,text) => {
      	event.preventDefault()
    	this.props.addMessage(username,text)
      	this.clearInput()
    }

	clearInput = () => {
    	this.setState({
        	text: '',
    })}

	isDisabled = () => {
      	const { text } = this.state
        if( !text ) {
        	return true
        }
      	else {
        	return false
        }
  	}
	render(){
      	const { text } = this.state
		const { username } = this.props
    	return(
        	<div>
              <form 
            	onSubmit={(event) => this.handleSubmit(event,username,text)} 
            	className="input-group">
                <input 
             		type="text" 
             		className="form-control" 
             		placeholder="Enter your message..." 
             		value = {this.state.text}
            		onChange={(event) => this.handleChange(event)}
             	/>
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
        
        )
    }
}
InputForm.propTypes = {
  	addMessage: PropTypes.func.isRequired,
  	username: PropTypes.string.isRequired,
}

export default InputForm