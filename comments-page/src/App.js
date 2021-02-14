import logo from './logo.svg';
import './App.css';

import Comment from './components/Comment'
import { Component } from 'react';

class App extends Component {

  state = {

    commentsList: [

      {
        name: 'Jhon',
        email: 'john@gmail.com',
        dateNow: new Date(2020, 3, 19),
        message: 'Hi, how are you?'
      },
      {
        name: 'Paul',
        email: 'paul@gmail.com',
        dateNow: new Date(2020, 12, 25),
        message: 'Hi, I am fine?'
      }

    ]

  }

  render() {

    return (

      <div className="App">
        <h1>Initial Project!!!</h1>
        {
          this.state.commentsList.map((comm, index) => (
            <Comment
              key={index}
              name={comm.name}
              email={comm.email}
              dateNow={comm.dateNow}
            >
              {comm.message}
            </Comment>
          )
          )
        }
      </div>

    );

  }

}

export default App;
