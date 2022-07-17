import { Component } from "react";

class EventPractice extends Component {

  state = {
    username: '',
    message: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value // 객체 안에서 key를 []로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key값으로 사용됨
    });
  } 

  handleClick = () => { 
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
      username: '',
      message: ''
    });
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="hihihi"
          value={this.state.username}
          onChange={this.handleChange}
            // console.log(e.target.value); //onChange 이벤트 발생 시 앞으로 변할 인풋 값인 e.target.value 콘솔에 기록
        />
        <input type="text"
        name="message"
        placeholder="아무거나"
        value={this.state.message}
        onChange={this.handleChange}
        />
        <button onClick={
          () => {
            alert(this.state.message);
            this.setState({
              message: ''
            });
          }
        }>확인</button>
      </div>
    );
  }
}
export default EventPractice;
