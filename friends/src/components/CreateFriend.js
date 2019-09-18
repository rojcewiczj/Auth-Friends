import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class CreateFriend extends React.Component {
    state = {
      newFriend: {
         
          name:'',
          age:[],
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
          .post('/friends', this.state.newFriend)
          .then(res => {
               console.log(res);
               const inputs = document.querySelectorAll('input');
               inputs.forEach(i =>{
                   i.value = ' '
               })
          })
          .catch(err => console.log(err));
      };



    render() 
             {
        return (
          <div>
            <form onSubmit={this.NewFriend}>
              <input
                type="name"
                name="name"
                value={this.state.newFriend.name}
                onChange={this.handleChange}
              />
              <input
                type="age"
                name="age"
                value={this.state.newFriend.age}
                onChange={this.handleChange}
              />
              <input
                type="email"
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


  