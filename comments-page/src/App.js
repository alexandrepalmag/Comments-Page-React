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

    ],

    newComm: {
      name: '',
      email: '',
      message: ''
    }

  }

  addComment = (event) => {

    event.preventDefault();

    const newComment = { ...this.state.newComm, dateNow: new Date() };

    /* let listComm = this.state.commentsList;
    listComm.push(newComment);

    this.setState({ commentsList: listComm });
    or
    */

    this.setState({

      commentsList: [...this.state.commentsList, newComment],
      newComm: { name: '', email: '', message: '' }

    })

  }

  removeComment = comment => {

    let list = this.state.commentsList;
    list = list.filter(c => c !== comment);

    this.setState({commentsList:list});

  }

  typeInField = event => {

    const { name, value } = event.target;
    this.setState({ newComm: { ...this.state.newComm, [name]: value } });

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
              onRemove = {this.removeComment.bind(this,comm)}
            >
              {comm.message}
            </Comment>
          )
          )
        }

        <form method="post" onSubmit={this.addComment}>
          <h2>Add New Comment</h2>
          <div>
            <input
              type="text"
              name="name"
              value={this.state.newComm.name}
              onChange={this.typeInField}
              placeholder="Type Your Name" />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={this.state.newComm.email}
              onChange={this.typeInField}
              placeholder="Type Your e-mail" />
          </div>
          <div>
            <textarea
              name="message"
              value={this.state.newComm.message}
              onChange={this.typeInField}
              rows="4" />
          </div>
          <button type="submit">Add Comment</button>
        </form>

      </div>

    );

  }

}

export default App;
