import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';


class DeleteFriend extends React.Component {
    state = {
      deleteFriend: {
          id: '',
         

      }
    }

handleChange = e => 
    this.setState({
      deleteFriend: {
        ...this.state.deleteFriend,
        [e.target.name]: e.target.value
        
      }
    });


    DeleteFriend  = e => {
        e.preventDefault();
        // axiosWithAuth ==> ?? an axios instance; .post() ==> ?? promise
        axiosWithAuth()
          .delete(`/friends/${this.state.deleteFriend.id}`, this.state.deleteFriend)
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
            <form onSubmit={this.DeleteFriend}>
            <input
                type="name"
                name="id"
                value={this.state.deleteFriend.id}
                onChange={this.handleChange}
              />
              <button>Delete Friend!</button>
            </form>
          </div>
        );
      }

  };

  export default DeleteFriend;


  