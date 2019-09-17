import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class CreateFriend extends React.Component {
    state = {
       newFriends={
           name:'',
           age: '',
           email: '',
       }
    }
};
handleChange = e => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    });

    NewFriend  = e => {
        e.preventDefault();
        // axiosWithAuth ==> ?? an axios instance; .post() ==> ?? promise
        axiosWithAuth()
          .post('/friends', this.state.NewFriend)
          .catch(err => console.log(err));
      };



    render() 
             {
        return (
          <div>
            <form onSubmit={this.NewFriend}>
              <input
                type="text"
                name="name"
                value={this.state.NewFriend.name}
                onChange={this.handleChange}
              />
              <input
                type="password"
                name="password"
                value={this.state.credentials.password}
                onChange={this.handleChange}
              />
              <button>Log in</button>
            </form>
          </div>
        );
      }

  };
  