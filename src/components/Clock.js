import {Component} from 'react'

export default class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'date': new Date().toLocaleTimeString()
    }
  }

  // 컴포넌트 출력물이 DOM에 렌더링 된 후 에 실행됩니다.
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick()
    }, 1000)

  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date().toLocaleTimeString()
    })
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date}.</h2>
      </div>
    )
  }
}