import { Component } from "react";

import "./App.css";
import Phonebook from "./components/Phonebook/Phonebook";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Phonebook />
      </div>
    );
  }
}

export default App;
