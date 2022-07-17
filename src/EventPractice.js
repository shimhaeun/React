import { Component } from "react";

class EventPractice extends Component {

  state = {
    message: ''
  }
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="hihihi"
          value={this.state.message}
          onChange={
            (e) => {
              this.setState({
                message: e.target.value
              })
            // console.log(e.target.value); //onChange 이벤트 발생 시 앞으로 변할 인풋 값인 e.target.value 콘솔에 기록
          }}
        />
      </div>
    );
  }
}
export default EventPractice;
