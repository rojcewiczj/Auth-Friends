import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class EditFriend extends React.Component {
    state = {
      editFriend: {
         id: [], 
          name:'',
          age:[],
          email: '',


      }
    }
    
    
      
handleChange = e => 
    this.setState({
      editFriend: {
        ...this.state.editFriend,
        [e.target.name]: e.target.value
     
      }  
     
    });
   
    EditFriend  = e => {
        e.preventDefault();
        axiosWithAuth()
          .put(`/friends/${this.state.editFriend.id}`, this.state.editFriend)
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
            <form onSubmit={this.EditFriend}>
            <input
                type="name"
                name="id"
                value={this.state.editFriend.id}
                onChange={this.handleChange}
              />
              <input
                type="name"
                name="name"
                value={this.state.editFriend.name}
                onChange={this.handleChange}
              />
              <input
                type="age"
                name="age"
                value={this.state.editFriend.age}
                onChange={this.handleChange}
              />
              <input
                type="email"
                name="email"
                value={this.state.editFriend.email}
                onChange={this.handleChange}
              />
              <button>Edit Friend!</button>
            </form>
          </div>
        );
      }

  };

  export default EditFriend;


  