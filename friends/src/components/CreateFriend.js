import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class CreateFriend extends React.Component {
    state = {
       newFriend:{
           name:'',
           age: '',
           email: '',
       }
    }

handleChange = e => 
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
          .then(res => {
               console.log(res);
          })
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
                value={this.state.newFriend.name}
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="age"
                value={this.state.newFriend.age}
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="email"
                value={this.state.newFriend.email}
                onChange={this.handleChange}
              />
              <button>Create A New Friend!</button>
            </form>
          </div>
        );
      }

  };

  export default CreateFriend;


  