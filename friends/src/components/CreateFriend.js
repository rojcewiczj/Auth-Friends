import React from 'react';
import axios from 'axios';


class CreateFriend extends React.Component {
    state = {
       newFriends=[]
    }
};
handleSubmit = e => {
    this.setState({
      newFriends: {
        ...this.state.newFriends,
        [e.target.name]: e.target.value
      }
    });
  };