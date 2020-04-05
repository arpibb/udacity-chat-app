import React, { Component } from 'react';

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
	
	isDisabled = () => {
    return false;
  };
	render(){
    	return(
        	<div>
              <form className="input-group">
                <input 
             		type="text" 
             		className="form-control" 
             		placeholder="Enter your message..." 
             		value = {this.state.value}
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

export default InputForm