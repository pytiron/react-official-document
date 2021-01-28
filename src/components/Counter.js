import {Component} from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.addCount()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  addCount() {
    this.setState((state, props) => ({
      counter: state.counter + props.increment
    }))
  }

  render() {
    return (
      <div>
        {this.state.counter}
      </div>
    );
  }
}


// 비동기 값을 사용하는 경우 this.setState({counter: this.state.counter + this.props.increment}) 사용하면 안됨
// 왜냐하면 setState 동작중에 값이 변경되는 경우가 발생할 수 있기 떄문. 따라서
// 함수로 업데이트 진행, 함수로 하면 setState 동작 시점 데이터를 활용하여 수정 진행.