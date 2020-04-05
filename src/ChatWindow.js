import React from 'react';
import MessageList from './MessageList'
import InputForm from './InputForm'

const ChatWindow = (props) => {
  const { username, messages } = props
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
		/>
		
      </div>
     )
}

export default ChatWindow