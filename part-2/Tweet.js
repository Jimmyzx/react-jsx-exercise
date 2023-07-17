// import React from 'react';

const Tweet = (props) => {
    return (
      <div className="tweet">
        <div className="tweet-header">
          <span className="username">{props.username}</span>
          <span className="name">{props.name}</span>
          <span className="date">{props.date}</span>
        </div>
        <div className="message">{props.message}</div>
      </div>
    );
  };
  
//   export default Tweet;