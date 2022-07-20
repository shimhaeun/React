import { Component } from "react";
import Counter from "./Counter";
import EventPractice from "./EventPractice";
import Info from "./info";
import Say from "./Say";
import ScrollBox from "./ScrollBox";
import ValidationSample from "./ValidationSample";

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => this.ScrollBox=ref}/>
        <button onClick={() => this.ScrollBox.ScrollToBottom()}>
          맨 밑으로~
        </button>
      </div>
    )
  }
}

export default App;
