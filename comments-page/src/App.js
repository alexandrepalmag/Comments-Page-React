import logo from './logo.svg';
import './App.css';

import Comment from './components/Comment'

function App() {
  return (
    <div className="App">
      <h1>Initial Project!!!</h1>
      <Comment name="john" email="john@gmail.com" dateNow={new Date(2020,3,19)}>
        </Comment>
      <Comment name="Karina" email="karina@gmail.com" dateNow={new Date(2020,3,30)}/>
    </div>
  );
}

export default App;
