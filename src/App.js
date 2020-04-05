import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow'

const users = [{ username: 'Amy' }, { username: 'John' }];

class App extends Component {
  state = {
    messages: [],
  }

	addMessage = (username,text) => {
    	this.setState((prevState)=>({
        	messages: [...prevState.messages,{username:username, text: text}]
      }))
    }
	
  render() {
    const { messages } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
    	    {users.map((user) => {
            return(
              <ChatWindow 
                key = {user.username}
                username = {user.username}
                messages = {messages}
                addMessage = {this.addMessage}
			    />)})}
		    </div>
      </div>
    );
  }
}

export default App;
