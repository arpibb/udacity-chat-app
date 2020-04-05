import React from 'react';
import MessageList from './MessageList'
import InputForm from './InputForm'
import PropTypes from 'prop-types';

const ChatWindow = (props) => {
  const { username, messages, addMessage } = props
  return(
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{username}</div>
		<MessageList 
        username = {username}
        messages = {messages}
      	/>
		<InputForm 
			username = {username}
			addMessage = {addMessage}
		/>
		
      </div>
     )
}
ChatWindow.propTypes = {
	addMessage: PropTypes.func.isRequired,
  	username: PropTypes.string.isRequired,
  	messages: PropTypes.array.isRequired
}

export default ChatWindow